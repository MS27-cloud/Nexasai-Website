export const initAnalytics = () => {
  const analyticsId = import.meta.env.VITE_ANALYTICS_ID;

  if (!analyticsId || analyticsId === 'your_analytics_id_here') {
    console.log('Analytics not configured');
    return;
  }

  const provider = import.meta.env.VITE_ANALYTICS_PROVIDER || 'plausible';

  if (provider === 'plausible') {
    const script = document.createElement('script');
    script.defer = true;
    script.dataset.domain = window.location.hostname;
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);
  } else if (provider === 'ga') {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${analyticsId}');
    `;
    document.head.appendChild(script2);
  }
};
