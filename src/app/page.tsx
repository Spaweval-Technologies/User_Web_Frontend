'use client';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import StyledHeader from "@/components/Header";
import MobileHeader from '@/components/MobileHeader';


const Home = () => {

  useEffect(() => {
    toast.success("Welcome to the app!", {
      duration: 2000,
      style: {
        background: '#333',
        color: '#fff',
      },
    });
  }, [])

  return (
    <>
    <StyledHeader />
    <MobileHeader />
    </>
  );
};

export default Home;
