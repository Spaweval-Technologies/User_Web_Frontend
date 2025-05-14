import { Fragment } from "react";
import StyledCheckbox from "../Common/Checkbox";
import Collapse from "../Common/Collapse";
import { filterList } from "../Listing/data";
import ListingFilterMb from "./ListingFilterMb";

//css
import {
  FiltersContainer,
  FilterSection,
  Hr,
  List,
  ListItem,
  Title,
} from "./index.styles";

/**
 * ListingFilter Component
 * @returns {JSX.Element} A sidebar-like filter panel with headings and separators
 */
const ListingFilter = () => {
  return (
    <>
      <FiltersContainer>
        <Title>Filters</Title>
        {filterList &&
          filterList.map((list, id) => (
            <Fragment key={list.title + id + "filter"}>
              <Hr />
              <FilterSection>
                <Collapse title={list.title}>
                  <List>
                    {list?.options &&
                      list.options.map((option, id) => (
                        <ListItem key={option.label + id + "sort"}>
                          {list.type === "checkbox" && (
                            <StyledCheckbox
                              checked={option.selected}
                              onChange={() => console.log("check")}
                              label={option.label}
                            />
                          )}
                          {list.type === "button" && option.label}
                        </ListItem>
                      ))}
                  </List>
                </Collapse>
              </FilterSection>
            </Fragment>
          ))}
      </FiltersContainer>
      <ListingFilterMb />
    </>
  );
};

export default ListingFilter;
