import { useState } from "react";
import Icons from "../../Icons";
import Icon from "../Common/Icon";
import Search from "../Search";
import StyledQrCode from "../Common/QrCode";
import StaticHeader from "./Header";
import menuOptions from "./data";

//css
import {
  AppDetail,
  GettheApp,
  HeaderWrapper,
  SearchContainer,
  SubTitle,
  Title,
  TitleContainer,
} from "./index.styles";

/**
 * StyledHeader component
 * @returns {JSX.Element} - A styled header component with a logo, buttons, and a search bar.
 */
const StyledHeader = () => {
  const [showQRCode, setShowQRCode] = useState<boolean>(false);

  return (
    <HeaderWrapper>
      <StaticHeader menuOptions={menuOptions} />
      <SearchContainer>
        <TitleContainer>
          <Title>Cool vibes</Title>
          <Icon src={Icons.BlinkingStar} alt="stars" width={75} height={71} />
          <Title>Feel Amazing & </Title>
          <SubTitle>Unforgettable</SubTitle>
          <Title>Experiences"</Title>
        </TitleContainer>
        <Search />
        <AppDetail>
          {!showQRCode ? (
            <GettheApp
              iconSrc={Icons.ScanBarcode}
              iconPosition="right"
              iconAlt="app"
              iconWidth={20}
              iconHeight={20}
              onMouseEnter={() => setShowQRCode(true)}
            >
              Get the App
            </GettheApp>
          ) : (
            <StyledQrCode
              onMouseLeave={() => setShowQRCode(false)}
              content={"Scan to Download"}
              value="check"
            />
          )}
        </AppDetail>
      </SearchContainer>
    </HeaderWrapper>
  );
};

export default StyledHeader;
