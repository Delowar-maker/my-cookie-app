'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const [userPreference, setUserPreference] = useState('');

  const handleSetPreference = (preference) => {
    document.cookie = `userPreference=${preference}; path=/`;
    setUserPreference(preference);
  };

  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Cookie-Based Web App</h1>
      <p className="mb-4">User Preference: {userPreference}</p>
      <button onClick={() => handleSetPreference('theme: dark')} className="btn">Set Dark Theme</button>
      <button onClick={() => handleSetPreference('language: en')} className="btn">Set English Language</button>
      <button onClick={() => router.push('/preference')} className="btn">View Preference</button>
    </div>
  );
};

export default HomePage;
