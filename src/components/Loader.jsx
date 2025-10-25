import { useState, useEffect } from 'react';
import '../styles/loader.css';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
