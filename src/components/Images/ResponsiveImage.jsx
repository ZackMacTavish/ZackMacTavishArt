import React from 'react';

const ResponsiveImage = React.forwardRef(function ResponsiveImage(
  {
    className,
    src,
    webpSrc,
    webpSrcSet,
    avifSrc,
    avifSrcSet,
    srcSet,
    sizes,
    alt,
    style,
    imgStyle,
    loading = 'lazy',
    decoding = 'async',
    fetchPriority,
    ...imgProps
  },
  ref
) {
  return (
    <picture className={className} style={style}>
      {avifSrc || avifSrcSet ? <source srcSet={avifSrcSet || avifSrc} sizes={sizes} type="image/avif" /> : null}
      {webpSrc || webpSrcSet ? <source srcSet={webpSrcSet || webpSrc} sizes={sizes} type="image/webp" /> : null}
      <img
        ref={ref}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          objectFit: 'inherit',
          objectPosition: 'inherit',
          ...imgStyle,
        }}
        {...imgProps}
      />
    </picture>
  );
});

export default ResponsiveImage;