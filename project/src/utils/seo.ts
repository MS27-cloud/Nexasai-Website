export interface SEOConfig {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
}

export const updateMetaTags = (config: SEOConfig) => {
  document.title = config.title;

  const metaTags = [
    { name: 'description', content: config.description },
    { property: 'og:title', content: config.title },
    { property: 'og:description', content: config.description },
    { property: 'og:url', content: config.url },
    { property: 'og:type', content: config.type || 'website' },
    { property: 'og:image', content: config.image || `${window.location.origin}/og-image.jpg` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: config.title },
    { name: 'twitter:description', content: config.description },
    { name: 'twitter:image', content: config.image || `${window.location.origin}/og-image.jpg` },
  ];

  metaTags.forEach(({ name, property, content }) => {
    const attribute = name ? 'name' : 'property';
    const value = name || property;
    let element = document.querySelector(`meta[${attribute}="${value}"]`);

    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, value!);
      document.head.appendChild(element);
    }

    element.setAttribute('content', content);
  });

  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = config.url;
};

export const baseURL = 'https://nexasai.com';

export const defaultSEO = {
  title: 'Nexasai Solutions - Next-Gen Tech Solutions',
  description: 'Empowering businesses with cutting-edge cloud automation, expert consulting, and innovative web development solutions.',
  url: baseURL,
};
