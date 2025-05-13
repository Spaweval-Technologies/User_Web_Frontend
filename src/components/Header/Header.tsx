import Icons from "@/Icons";
import SecondaryButton from "../Common/Buttons/OutlinedButton";
import StyledSelect from "../Common/Select";

//props
import MenuOptionsProps from "./index.d";

//css
import { ButtonsWrapper, Header, Logo } from "./index.styles";

/**
 * StaticHeader Component
 * Displays a static top header with a logo, a "For Business" button,
 * and a dropdown select menu for navigation or other options.
 * @param {Object} props - Component props
 * @param {Array<{ label: string, value: string }>} props.menuOptions - Array of dropdown options for the menu
 * @returns {JSX.Element} A styled static header with logo, button, and dropdown select
 */
const StaticHeader = ({ menuOptions }: MenuOptionsProps) => {
  return (
    <Header>
      <Logo src={Icons.Logo} alt="logo" width={78} height={63} />
      <ButtonsWrapper>
        <SecondaryButton>For Business</SecondaryButton>
        <StyledSelect
          position="right"
          defaultText="Menu"
          value="Menu"
          options={menuOptions}
        />
      </ButtonsWrapper>
    </Header>
  );
};

export default StaticHeader;
