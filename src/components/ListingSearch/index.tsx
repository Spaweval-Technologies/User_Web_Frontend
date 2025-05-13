import Icons from "@/Icons";
import Icon from "../Common/Icon";

//css
import { Input, SearchWrapper } from "./index.styles";

/**
 * ListingSearch component.
 * A simple search input field designed for listing pages (e.g., Spa listings).
 * It includes a text input and a search icon, visually styled for mobile or desktop usage.
 * Currently, it does not handle any input or search functionality.
 * @returns {JSX.Element} A styled input with a search icon
 */
const ListingSearch = () => {
  return (
    <SearchWrapper>
      <Input placeholder="Search Spa" type="text" />
      <Icon src={Icons.Search} alt="search list" width={18} height={18} />
    </SearchWrapper>
  );
};

export default ListingSearch;
