import { useState } from "react";

import SliderMb from "../Common/SliderMb";
import StyledCheckbox from "../Common/Checkbox";
import Icons from "@/Icons";

//css
import {
  Apply,
  Btn,
  Buttons,
  ClearAll,
  Filters,
  FiltersContent,
  FiltersList,
  FiltersListItem,
  FiltersTitle,
  FiltersTypes,
  Hr,
  Results,
  SelectCategoriesListItem,
  SelectFilterList,
  SortSlider,
  SortTitle,
  Vr,
  Wrapper,
} from "./index.styles";

/**
 * ListingFilterMb component.
 * A mobile-friendly UI component that provides "Sort By" and "Filter" functionalities
 * for listing pages using sliding panels (drawers). Users can open sliders
 * to sort or filter content by categories such as ratings, location, or spa types.
 * @returns {JSX.Element} The mobile filter and sort UI component for listings
 */
const ListingFilterMb = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [showSort, setShowSort] = useState<boolean>(false);
  const [currentFilter, setCurrentFilter] = useState<String>("categories");

  return (
    <Wrapper>
      <Btn
        iconSrc={Icons.SortLow}
        iconAlt="sort"
        iconWidth={16}
        iconHeight={16}
        onClick={() => setShowSort(true)}>
        Sort By
      </Btn>
      <SliderMb
        className="sort_slide"
        showSlider={showSort}
        onClose={() => setShowSort(false)}>
        <SortSlider>
          <SortTitle>Sort</SortTitle>
          <Hr />
          <StyledCheckbox
            checked
            onChange={() => console.log("check")}
            label="Popularity"
            position="right"
          />
          <StyledCheckbox
            checked={false}
            onChange={() => console.log("check")}
            label="Ratings"
            position="right"
          />
          <StyledCheckbox
            checked={false}
            onChange={() => console.log("check")}
            label="Price Low to High"
            position="right"
          />
          <StyledCheckbox
            checked={false}
            onChange={() => console.log("check")}
            label="Price High to Low"
            position="right"
          />
        </SortSlider>
      </SliderMb>
      <Vr />
      <Btn
        iconSrc={Icons.Filter}
        iconAlt="filter"
        iconWidth={16}
        iconHeight={16}
        onClick={() => setShowFilter(true)}>
        Filter
      </Btn>
      <SliderMb showSlider={showFilter} onClose={() => setShowFilter(false)}>
        <Filters>
          <FiltersTitle>
            <SortTitle>Filters</SortTitle>
            <ClearAll>Clear All</ClearAll>
          </FiltersTitle>
          <FiltersTypes>
            <FiltersList>
              <FiltersListItem
                activeFilter={currentFilter === "categories"}
                onClick={() => setCurrentFilter("categories")}>
                Categories
              </FiltersListItem>
              <FiltersListItem onClick={() => setCurrentFilter("location")}>
                Location
              </FiltersListItem>
              <FiltersListItem onClick={() => setCurrentFilter("ratings")}>
                Ratings
              </FiltersListItem>
              <FiltersListItem onClick={() => setCurrentFilter("discount")}>
                Discount
              </FiltersListItem>
            </FiltersList>
            <FiltersContent>
              {currentFilter === "categories" && (
                <SelectFilterList>
                  <SelectCategoriesListItem>
                    <StyledCheckbox
                      label="Swedish Spa"
                      checked={false}
                      onChange={() => console.log("check")}
                    />
                  </SelectCategoriesListItem>
                  <SelectCategoriesListItem>
                    <StyledCheckbox
                      label="Hot Tissue Spa"
                      checked={false}
                      onChange={() => console.log("check")}
                    />
                  </SelectCategoriesListItem>
                  <SelectCategoriesListItem>
                    <StyledCheckbox
                      label="Hot Stone Spa"
                      checked={false}
                      onChange={() => console.log("check")}
                    />
                  </SelectCategoriesListItem>
                  <SelectCategoriesListItem>
                    <StyledCheckbox
                      label="AromaTherapy Spa"
                      checked={false}
                      onChange={() => console.log("check")}
                    />
                  </SelectCategoriesListItem>
                  <SelectCategoriesListItem>
                    <StyledCheckbox
                      label="Thai Spa"
                      checked={false}
                      onChange={() => console.log("check")}
                    />
                  </SelectCategoriesListItem>
                  <SelectCategoriesListItem>
                    <StyledCheckbox
                      label="Destination Spa"
                      checked={false}
                      onChange={() => console.log("check")}
                    />
                  </SelectCategoriesListItem>
                  <SelectCategoriesListItem>
                    <StyledCheckbox
                      label="ThalassoTherapy Spa"
                      checked={false}
                      onChange={() => console.log("check")}
                    />
                  </SelectCategoriesListItem>
                  <SelectCategoriesListItem>
                    <StyledCheckbox
                      label="Shiatsu Massage Spa"
                      checked={false}
                      onChange={() => console.log("check")}
                    />
                  </SelectCategoriesListItem>
                </SelectFilterList>
              )}
            </FiltersContent>
          </FiltersTypes>
        </Filters>

        <Buttons>
          <Results>21 Results</Results>
          <Apply>Apply</Apply>
        </Buttons>
      </SliderMb>
    </Wrapper>
  );
};

export default ListingFilterMb;
