'use client';
import { useState } from 'react';
import { useAppSelector } from '@/redux/store/hooks';

import Icons from '@/Icons';
import getMenuOptionsMb from './data';
import Icon from '../Common/Icon';
import SearchableSelect from '../SearchableSelect';
import DatePicker from '../DatePicker';
import TimePicker from '../TimePicker';
import StaticHeaderMb from './HeaderMb';

//css
import { MobileHeaderWrapper, SearchBtn, SearchContainer, Wrapper } from './index.styles';
import { TitleContainer, Title, SubTitle, GettheApp } from '../Header/index.styles';
/**
 * MobileHeader component
 * @returns {JSX.Element} - A mobile header component with a logo, title, and search functionality.
 */
const MobileHeader = () => {
  const user = useAppSelector((state) => state.user);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const onCloseMenu = () => {
    setShowMenu(false);
  };

  const menuOptionsMb = getMenuOptionsMb(user?.name || 'Guest');

  return (
    <MobileHeaderWrapper>
      <StaticHeaderMb
        showMenu={showMenu}
        menuOptions={menuOptionsMb}
        onMenuClose={onCloseMenu}
        onMenuClick={() => setShowMenu(true)}
      />
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
