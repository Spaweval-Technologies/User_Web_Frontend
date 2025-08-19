import { useAppSelector } from '@/redux/store/hooks';
import Icons from '@/Icons';
import SecondaryButton from '../Common/Buttons/OutlinedButton';
import StyledSelect from '../Common/Select';
import Icon from '../Common/Icon';
import getMenuOptionsMb from '../MobileHeader/data';

//props
import MenuOptionsProps from './index.d';

//css
import { ButtonsWrapper, Header, Logo } from './index.styles';
import { useEffect, useState } from 'react';

/**
 * StaticHeader Component
 * Displays a static top header with a logo, a "For Business" button,
 * and a dropdown select menu for navigation or other options.
 * @param {Object} props - Component props
 * @param {Array<{ label: string, value: string }>} props.menuOptions - Array of dropdown options for the menu
 * @returns {JSX.Element} A styled static header with logo, button, and dropdown select
 */
const StaticHeader = ({ menuOptions }: MenuOptionsProps) => {
  const user = useAppSelector((state) => state.user);
  const menuOptionsMb = getMenuOptionsMb(user.name);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(user.authenticated || false);

  useEffect(() => {
    setIsLoggedIn(user.authenticated || false);
  }, [user.authenticated]);

  return (
    <Header>
      <Logo src={Icons.Logo} alt="logo" width={78} height={63} />
      <ButtonsWrapper>
        <SecondaryButton>For Business</SecondaryButton>
        {!isLoggedIn ? (
          <StyledSelect position="right" defaultText="Menu" value="Menu" options={menuOptions} />
        ) : (
          <>
            <StyledSelect
              position="right"
              defaultText={user.name}
              value={user.name}
              options={menuOptionsMb}
            />
            <Icon
              src={Icons.ProfileImg}
              alt="img-profile"
              width={48}
              height={48}
              title={user.name}
            />
          </>
        )}
      </ButtonsWrapper>
    </Header>
  );
};

export default StaticHeader;
