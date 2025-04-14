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
    <CalendarWrapper>
              <DaySelector
              animate
              mode="single"
              required={true}
              selected={new Date(2025,3,8)}
              today={new Date()}
              onSelect={handleSelect}
              footer={
               "Pick a day."
              }
              
            />
            </CalendarWrapper>
    </>
  );
};

export default Home;
