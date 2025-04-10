import Button from "../Common/Buttons/Button";
import DatePicker from "../DatePicker";
import SearchableSelect from "../SearchableSelect";
import TimePicker from "../TimePicker";
import VerticalSeperator from "../Common/VerticalSeperator";

//css
import { SearchWrapper, Wrapper } from "./index.styles";

/*
  * Search component
  * @returns {JSX.Element} - A search component with date, time, and location pickers.
*/
const Search = () => {
  return (
    <SearchWrapper>
      <Wrapper>
        <SearchableSelect />
        <VerticalSeperator height={"38px"} />
        <DatePicker />
        <VerticalSeperator height={"38px"} />
        <TimePicker />
      </Wrapper>
      <Button>Search</Button>
    </SearchWrapper>
  );
};

export default Search;
