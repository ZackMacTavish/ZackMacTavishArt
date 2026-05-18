#!/bin/bash
roots=("src/assets" "src/assets/optimized" "src/assets/og" "public")
exclude_dirs=(dist node_modules .git .cache)
exclude_path_regex="dist|node_modules|\.git|\.cache"

for root in "${roots[@]}"; do
    echo "--- Root: $root ---"
    unused_count=0
    total_count=0
    
    # Get images in this root (excluding subdirectories to avoid double counting if they are roots too)
    images=$(find "$root" -maxdepth 1 -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" -o -name "*.avif" -o -name "*.gif" -o -name "*.svg" \))
    
    while read -r img; do
        [[ -z "$img" ]] && continue
        ((total_count++))
        basename=$(basename "$img")
        
        # Search for basename in project (excluding dist, node_modules, etc.)
        # Use rg for speed if available, else grep
        if command -v rg > /dev/null; then
            match=$(rg -l --fixed-strings "$basename" . -g '!{dist,node_modules,.git,.cache}')
        else
            match=$(grep -rl "$basename" . --exclude-dir={dist,node_modules,.git,.cache})
        fi
        
        # Note: we might need to filter the match to ensure it's not just the file itself if the search includes the root
        # But grep -l returns the file itself too. If match only contains the file itself, it might be unused.
        
        # Check if match contains anything other than the image path itself
        is_used=false
        while read -r m; do
            [[ -z "$m" ]] && continue
            if [[ "$m" != "$img" ]]; then
                is_used=true
                break
            fi
        done <<< "$match"
        
        if ! $is_used; then
            echo "Unused: $img"
            ((unused_count++))
        fi
    done <<< "$images"
    echo "Summary: $unused_count unused out of $total_count images in $root"
    echo ""
done
