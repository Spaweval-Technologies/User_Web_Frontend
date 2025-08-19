'use client';
import { PageWrapper, Wrapper } from '../home/index.styles';
import StaticHeader from '@/components/Header/Header';
import getMenuOptionsMb from '@/components/MobileHeader/data';
import { Border, HeaderWrapperMb } from '../listing/index.styles';
import StaticHeaderMb from '@/components/MobileHeader/HeaderMb';
import { useState } from 'react';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import SpaDetailsContent from '@/components/SpaDetails';
import Detail from '@/components/Detail';

const SpaDetails = () => {
  const menuOptionsMb = getMenuOptionsMb('Guest');
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const onCloseMenu = () => {
    setShowMenu(false);
  };
  const pathName = usePathname();

  return (
    <PageWrapper>
      <StaticHeader menuOptions={menuOptionsMb} />
      <Border />
      <HeaderWrapperMb>
        <StaticHeaderMb
          showMenu={showMenu}
          menuOptions={menuOptionsMb}
          onMenuClose={onCloseMenu}
          onMenuClick={() => setShowMenu}
          showSearch={false}
        />
      </HeaderWrapperMb>
      <Detail pathName={pathName} />
      <Wrapper>
        <Footer />
      </Wrapper>
    </PageWrapper>
  );
};

export default SpaDetails;
