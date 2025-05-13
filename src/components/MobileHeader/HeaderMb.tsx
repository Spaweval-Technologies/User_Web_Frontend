import Icons from "@/Icons";
import Icon from "../Common/Icon";
import SliderMb from "../Common/SliderMb";
import MenuOptions from "./MenuOptions";
import ListingSearch from "../ListingSearch";

//props
import { StaticHeaderMbProps } from "./index.d";

//css
import { MbHeader } from "./index.styles";

/**
 * StaticHeaderMb - A static mobile header component with a logo and menu icon.
 * @param {Object} props - Props for StaticHeaderMb component
 * @param {boolean} props.showMenu - Whether the sliding menu is visible
 * @param {() => void} props.onMenuClick - Callback when the menu icon is clicked
 * @param {() => void} props.onMenuClose - Callback when the slider menu is closed
 * @param {Array} props.menuOptions - Array of menu options to display in the slider
 * @param {boolean} props.showSearch - show search on Header or not
 * @returns {JSX.Element} A mobile header UI with logo, menu icon, and sliding menu
 */
const StaticHeaderMb = ({
  showMenu,
  onMenuClick,
  onMenuClose,
  menuOptions,
  showSearch = false,
}: StaticHeaderMbProps) => {
  return (
    <>
      <MbHeader>
        <Icon
          src={Icons.Logo}
          alt="mobile-logo"
          width={46}
          height={37}
          mobilewidth={46}
          mobileheight={37}
        />
        {showSearch && <ListingSearch />}
        <Icon
          onClick={onMenuClick}
          src={Icons.Menu}
          alt="menu"
          width={32}
          height={32}
        />
      </MbHeader>
      <SliderMb showSlider={showMenu} onClose={onMenuClose}>
        <MenuOptions menuOptions={menuOptions} />
      </SliderMb>
    </>
  );
};

export default StaticHeaderMb;
