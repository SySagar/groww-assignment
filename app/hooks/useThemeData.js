import { useState, useEffect } from 'react';
import { useThemeStore } from '@/app/store/themeStore';
import APIMethods from '@lib/api';

function useThemeData() {
  
    const { theme, setTheme } = useThemeStore();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchThemeData = async () => {
      try {
        const response = await APIMethods.merchant.data();
        console.log('response', response);
        const { data } =  response;
        setTheme(data);
      } catch (err) {
        setError(err);
        console.error('Error fetching theme data:', err);
      }
    };

    fetchThemeData();
  }, []);

  return { theme, error, setTheme };
}

export default useThemeData;
