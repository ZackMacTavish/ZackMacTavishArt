import React, { useEffect } from 'react'

// Minimal SEO component: sets document.title and common meta/OG/Twitter tags
// Props: { title, description, image, url, keywords }
export default function SEO({ title, description, image, url, keywords }) {
  useEffect(() => {
    const doc = document;

    // Title
    if (title) {
      doc.title = title;
    }

    const ensureMeta = (attrKey, attrVal, content) => {
      let selector = `meta[${attrKey}='${attrVal}']`;
      let tag = doc.head.querySelector(selector);
      if (!tag) {
        tag = doc.createElement('meta');
        tag.setAttribute(attrKey, attrVal);
        doc.head.appendChild(tag);
      }
      if (content) tag.setAttribute('content', content);
    };

    const ensureLink = (rel, href) => {
      let selector = `link[rel='${rel}']`;
      let link = doc.head.querySelector(selector);
      if (!link) {
        link = doc.createElement('link');
        link.setAttribute('rel', rel);
        doc.head.appendChild(link);
      }
      if (href) link.setAttribute('href', href);
    };

    const pageUrl = url || (typeof window !== 'undefined' ? window.location.href : undefined);

    // Standard SEO
    if (description) ensureMeta('name', 'description', description);
    if (keywords) ensureMeta('name', 'keywords', Array.isArray(keywords) ? keywords.join(', ') : keywords);

    // Open Graph
    ensureMeta('property', 'og:type', 'website');
    if (title) ensureMeta('property', 'og:title', title);
    if (description) ensureMeta('property', 'og:description', description);
    if (image) ensureMeta('property', 'og:image', image);
    if (pageUrl) ensureMeta('property', 'og:url', pageUrl);

    // Twitter
    ensureMeta('name', 'twitter:card', image ? 'summary_large_image' : 'summary');
    if (title) ensureMeta('name', 'twitter:title', title);
    if (description) ensureMeta('name', 'twitter:description', description);
    if (image) ensureMeta('name', 'twitter:image', image);

    // Canonical
    if (pageUrl) ensureLink('canonical', pageUrl);
  }, [title, description, image, url, keywords]);

  return null;
}
