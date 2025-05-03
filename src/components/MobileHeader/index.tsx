import Icons from "@/Icons";

import Icon from "../Common/Icon";
import SearchableSelect from "../SearchableSelect";
import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";

//css
import {
  MbHeader,
  MobileHeaderWrapper,
  SearchBtn,
  SearchContainer,
  Wrapper,
} from "./index.styles";
import {
  TitleContainer,
  Title,
  SubTitle,
  GettheApp,
} from "../Header/index.styles";

/**
 * MobileHeader component
 * @returns {JSX.Element} - A mobile header component with a logo, title, and search functionality.
 */
const MobileHeader = () => {
  return (
    <MobileHeaderWrapper>
      <MbHeader>
        <Icon src={Icons.Logo} alt="mobile-logo" width={46} height={37} />
        <Icon src={Icons.Menu} alt="menu" width={32} height={32} />
      </MbHeader>
      <TitleContainer>
        <Title>Cool vibes</Title>
        <Icon src={Icons.BlinkingStar} alt="stars" width={40} height={38} />
        <Title>Feel Amazing & </Title>
        <SubTitle>Unforgettable</SubTitle>
        <Title>Experiences"</Title>
      </TitleContainer>
      <SearchContainer>
        <SearchableSelect />
        <Wrapper>
          <DatePicker />
          <TimePicker />
        </Wrapper>
        <SearchBtn>Search Spawn</SearchBtn>
      </SearchContainer>
      <GettheApp
        iconSrc={Icons.ScanBarcode}
        iconPosition="right"
        iconAlt="app"
        iconWidth={20}
        iconHeight={20}
      >
        Get the App
      </GettheApp>
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;
