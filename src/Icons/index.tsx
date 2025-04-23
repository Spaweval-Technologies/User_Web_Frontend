import Logo from "./HeaderLogo.svg";
import BlinkingStar from "./Blinking_Star.svg";
import ScanBarcode from "./Scan_Barcode.svg"
import Clock from "./Clock.svg";
import Calendar from "./Calendar.svg";
import Search from "./Search.svg";
import Close from "./Close.png";
import Menu from "./Menu.svg";

/*
  * Icons component
  * @returns {JSX.Element} - A collection of SVG icons used in the application.
*/
const Icons = {Logo, Menu, BlinkingStar, ScanBarcode, Clock, Calendar, Search, Close};

export default Icons;
export type IconsType = typeof Icons;