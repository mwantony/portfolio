import { useState, useEffect } from 'react';

/**
 * Detects user's country by IP using ipwho.is API.
 * Returns { country, countryCode, loading, error }
 */
export function useIpLocation() {
  const [state, setState] = useState({
    country: null,
    countryCode: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    fetch('https://ipwho.is/', { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        clearTimeout(timeout);
        setState({
          country: data.country,
          countryCode: data.country_code,
          loading: false,
          error: null,
        });
      })
      .catch(err => {
        clearTimeout(timeout);
        setState(prev => ({
          ...prev,
          loading: false,
          error: err.name === 'AbortError' ? 'Request timed out' : err.message,
        }));
      });

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, []);

  return state;
}
