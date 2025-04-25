"use client";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

import StyledHeader from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import CardCarousel from "@/components/Common/Carousel/SpaCardsCarousel";
import Categories from "@/components/Categories";
import spaDetails from "@/components/Common/Carousel/SpaCardsCarousel/data";

//css
import { PageWrapper } from "./home/index.styles";

/**
 * Home Page Component
 * Renders the main homepage layout including headers, category listings,
 * and multiple carousels. Displays a welcome toast message on initial load.
 * @returns {JSX.Element} The homepage layout.
 */
const Home = () => {
  useEffect(() => {
    toast.success("Welcome to the app!", {
      duration: 2000,
      style: {
        background: "#333",
        color: "#fff",
      },
    });
  }, []);

  return (
    <PageWrapper>
      <StyledHeader />
      <MobileHeader />
      <Categories />
      <CardCarousel title={"New to Spawn"} spaDetails={spaDetails}/>
      <CardCarousel title={"Recommended"} spaDetails={spaDetails}/>
    </PageWrapper>
  );
};

export default Home;
