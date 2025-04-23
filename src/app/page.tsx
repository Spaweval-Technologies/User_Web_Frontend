'use client';
import React from 'react';
// import toast from 'react-hot-toast';
import StyledHeader from "@/components/Header";
import MobileHeader from '@/components/MobileHeader';
import { CalendarWrapper, DaySelector } from '@/components/DatePicker/index.styles';


const Home = () => {

  // useEffect(() => {
  //   toast.success("Welcome to the app!", {
  //     duration: 2000,
  //     style: {
  //       background: '#333',
  //       color: '#fff',
  //     },
  //   });
  // }, [])

  const handleSelect = (date: Date) => {
    // toast.success(`Selected: ${date.toLocaleDateString()}`, {
    //   duration: 2000,
  }
  return (
    <>
    <StyledHeader />
    <MobileHeader />
    </>
  );
};

export default Home;
