
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>We`&apos;`ll redirect you to the home page in 5 seconds.</p>
    </div>
  );
};

export default ErrorPage;
