"use client";
import { useRouter } from "next/navigation";
import React, { useStateuse, useEffect } from "react";

const preference= () => {
    const [userPreference, setUserPreference] = useState('');
  
    useEffect(() => {
      const cookies = document.cookie.split('; ');
      for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'userPreference') {
          setUserPreference(value);
          break;
        }
      }
    }, []);
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-2xl mb-4">User Preference</h1>
    <p className="mb-4">Stored Preference: {userPreference}</p>
  </div>
  );
};

export default preference;
