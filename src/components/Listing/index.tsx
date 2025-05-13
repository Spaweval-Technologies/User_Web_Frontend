import ListingCarousel from "../Common/Carousel/ListingCarousel";
import StyledSelect from "../Common/Select";
import ListingFilter from "../ListingFilter";
import ListingSearch from "../ListingSearch";
import listingData, { sortOptions } from "./data";

//css
import {
  FilteredTitle,
  FiltersWrapper,
  ListingContainer,
  SearchWrapper,
  SubTitle,
  TitleWrapper,
  Wrapper,
} from "./index.styles";

/**
 * StyledListing Component
 * - Renders `ListingFilter` on the left side for user-applied filters.
 * - Displays a header section with location and filter subtitle.
 * - Integrates `StyledSelect` dropdown for sorting options (e.g., price, rating).
 * - Uses `ListingCarousel` to display the list of spa cards with pagination.
 * @returns {JSX.Element} A full-page layout containing filter options and spa listings
 */
const StyledListing = () => {
  return (
    <Wrapper>
      <FiltersWrapper>
        <ListingFilter />
      </FiltersWrapper>
      <ListingContainer>
        <SearchWrapper>
          <TitleWrapper>
            <SubTitle>Spa's in Benglore</SubTitle>
            <FilteredTitle>Swedish Spa</FilteredTitle>
          </TitleWrapper>
          <ListingSearch />
          <StyledSelect
            position="right"
            defaultText="Sort By"
            value="Sort By"
            options={sortOptions}
          />
        </SearchWrapper>
        <ListingCarousel spaList={listingData} />
      </ListingContainer>
    </Wrapper>
  );
};

export default StyledListing;
