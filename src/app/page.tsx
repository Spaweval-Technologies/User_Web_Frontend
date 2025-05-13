"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import StyledHeader from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import CardCarousel from "@/components/Common/Carousel/SpaCardsCarousel";
import Categories from "@/components/Categories";
import spaDetails from "@/components/Common/Carousel/SpaCardsCarousel/data";
import DownloadApp from "@/components/DownloadApp";
import ReviewCarousel from "@/components/Common/Carousel/ReviewCardsCarousel";
import reviewDetails from "@/components/Common/Carousel/ReviewCardsCarousel/data";
import SpaBusiness from "@/components/SpaBusiness";
import Footer from "@/components/Footer";
import Images from "../../public/Images";
import AppNotificationMb from "@/components/Common/AppNotification";

//css
import { PageWrapper, Wrapper, WrapperBg } from "./home/index.styles";

/**
 * Home Page Component
 * Renders the main homepage layout including headers, category listings,
 * and multiple carousels. Displays a welcome toast message on initial load.
 * @returns {JSX.Element} The homepage layout.
 */
const Home = () => {
  const [showNotification, setShowNotification] = useState<boolean>(false);

  useEffect(() => {
    toast.success("Welcome to the app!", {
      duration: 2000,
      style: {
        background: "#333",
        color: "#fff",
      },
    });
    setShowNotification(true);
  }, []);

  const onCloseNotification = () => setShowNotification(false);

  return (
    <PageWrapper>
      <AppNotificationMb
        show={showNotification}
        onClose={onCloseNotification}
      />
      <WrapperBg>
        <StyledHeader />
        <MobileHeader />
        <Categories />
      </WrapperBg>
      <CardCarousel title={"New to Spawn"} spaDetails={spaDetails} />
      <CardCarousel title={"Recommended"} spaDetails={spaDetails} />
      <DownloadApp />
      <ReviewCarousel title="Reviews" reviewDetails={reviewDetails} />
      <Wrapper>
        <SpaBusiness
          title={"Spawn for Business"}
          description="Here's how to effortlessly fill those gaps with our new online booking
          optimisation tool. Booking your salon appointments is as easy as a few
          taps on your device. It's quick, convenient, and hassle-free."
          iconHeight={29}
          iconWidth={29}
          rating={5}
          reviews={1241}
          findMoreUrl="check"
          imgSrc={Images.BusinessLaptopBg}
          alt={"business laptop bg"}
        />
        <Footer />
      </Wrapper>
    </PageWrapper>
  );
};

export default Home;
