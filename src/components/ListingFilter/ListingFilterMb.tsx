import { useState } from "react";

import SliderMb from "../Common/SliderMb";
import StyledCheckbox from "../Common/Checkbox";
import Icons from "@/Icons";
import { filterList, sortOptions } from "../Listing/data";

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
  const [currentFilter, setCurrentFilter] = useState<String>("Categories");

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
          <SortTitle>Sort By</SortTitle>
          <Hr />
          {sortOptions &&
            sortOptions.map((option, id) => (
              <StyledCheckbox
                checked={option.selected ?? false}
                onChange={() => console.log("check")}
                label={option.label}
                position="right"
                key={option.value + id + "sort-mb"}
              />
            ))}
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
              {filterList &&
                filterList.map((filter, id) => (
                  <FiltersListItem
                    key={filter.title + id + "filter-mb"}
                    activeFilter={
                      currentFilter.toLowerCase() === filter.title.toLowerCase()
                    }
                    onClick={() =>
                      setCurrentFilter(filter.title.toLowerCase())
                    }>
                    {filter.title}
                  </FiltersListItem>
                ))}
            </FiltersList>
            <FiltersContent>
              {filterList &&
                filterList.map(
                  (list, id) =>
                    list.title.toLowerCase() ===
                      currentFilter.toLowerCase() && (
                      <SelectFilterList
                        key={list.title + id + "filter-options-mb"}>
                        {list.options &&
                          list.options.map((option, id) => (
                            <SelectCategoriesListItem key={option.value + id}>
                              <StyledCheckbox
                                label={option.label}
                                checked={option.selected}
                                onChange={() => console.log("check")}
                              />
                            </SelectCategoriesListItem>
                          ))}
                      </SelectFilterList>
                    )
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
