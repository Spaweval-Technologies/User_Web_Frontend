"use client";
import Footer from "@/components/Footer";
import StaticHeader from "@/components/Header/Header";
import StaticHeaderMb from "@/components/MobileHeader/HeaderMb";
import { useState } from "react";
import menuOptions from "@/components/Header/data";
import StyledListing from "@/components/Listing";
import menuOptionsMb from "@/components/MobileHeader/data";

//css
import { Border, HeaderWrapperMb } from "./index.styles";
import { PageWrapper, Wrapper } from "../home/index.styles";

/**
 * React functional component that renders a page with a header, mobile header, listing, and footer.
 * Handles menu visibility state for mobile header interaction.
 * @returns {JSX.Element} A fully structured listing page layout
 */
const Listing = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const onCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <PageWrapper>
      <StaticHeader menuOptions={menuOptions} />
      <Border />
      <HeaderWrapperMb>
        <StaticHeaderMb
          showMenu={showMenu}
          menuOptions={menuOptionsMb}
          onMenuClose={onCloseMenu}
          onMenuClick={() => setShowMenu(true)}
          showSearch
        />
      </HeaderWrapperMb>
      <StyledListing />
      <Wrapper>
        <Footer />
      </Wrapper>
    </PageWrapper>
  );
};

export default Listing;
