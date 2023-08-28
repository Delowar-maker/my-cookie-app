'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const AboutPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">About Page</h1>
    </div>
  );
};

export default AboutPage;
