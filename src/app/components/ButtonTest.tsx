"use client";
import React from 'react'
import { useRouter } from 'next/navigation';

const ButtonTest = () => {
    const router = useRouter()

    const handleClick = () => {
      router.push('/usersPage');
    };

    return <div>
      <button onClick={handleClick}>Go to usersPage</button>
      </div>
}





export default ButtonTest