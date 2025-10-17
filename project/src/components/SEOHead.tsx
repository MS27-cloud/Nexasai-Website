import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateMetaTags, baseURL, defaultSEO } from '../utils/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  image,
  type
}) => {
  const location = useLocation();

  useEffect(() => {
    const url = `${baseURL}${location.pathname}`;

    updateMetaTags({
      title: title ? `${title} | Nexasai Solutions` : defaultSEO.title,
      description: description || defaultSEO.description,
      url,
      image,
      type,
    });
  }, [location, title, description, image, type]);

  return null;
};
