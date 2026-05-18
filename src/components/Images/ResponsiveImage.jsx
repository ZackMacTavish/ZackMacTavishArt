import React from 'react';

const ResponsiveImage = React.forwardRef(function ResponsiveImage(
  {
    className,
    src,
    webpSrc,
    avifSrc,
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
      {avifSrc ? <source srcSet={avifSrc} type="image/avif" /> : null}
      {webpSrc ? <source srcSet={webpSrc} type="image/webp" /> : null}
      <img
        ref={ref}
        src={src}
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