import Icons from "../../Icons";
import SecondaryButton from "../Common/Buttons/OutlinedButton";
import Icon from "../Common/Icon";
import Search from "../Search";
import StyledSelect from "../Common/Select";

//css
import {
  AppDetail,
  ButtonsWrapper,
  GettheApp,
  Header,
  HeaderWrapper,
  Logo,
  SearchContainer,
  SubTitle,
  Title,
  TitleContainer,
} from "./index.styles";
import StyledQrCode from "../Common/QrCode";
import { useState } from "react";
import menuOptions from "./data";

/**
 * StyledHeader component
 * @returns {JSX.Element} - A styled header component with a logo, buttons, and a search bar.
 */
const StyledHeader = () => {
  const [showQRCode, setShowQRCode] = useState<boolean>(false);

  return (
    <HeaderWrapper>
      <Header>
        <Logo
          src={Icons.Logo}
          alt="logo"
          width={78}
          height={63}
        />
        <ButtonsWrapper>
          <SecondaryButton>For Business</SecondaryButton>
          <StyledSelect defaultText="Menu" value="Menu" options={menuOptions} />
        </ButtonsWrapper>
      </Header>
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
