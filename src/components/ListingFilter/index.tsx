import StyledCheckbox from "../Common/Checkbox";
import Collapse from "../Common/Collapse";
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
        <Hr />
        <FilterSection>
          <Collapse title="All Categories">
            <List>
              <ListItem>Hot Stone Spa</ListItem>
              <ListItem>AromaTherapy Spa</ListItem>
              <ListItem>Thai Spa</ListItem>
              <ListItem>Destination Spa</ListItem>
              <ListItem>ThalassoTherapy Spa</ListItem>
              <ListItem>Shiatsu Spa</ListItem>
            </List>
          </Collapse>
        </FilterSection>
        <Hr />
        <FilterSection>
          <Collapse title="Location">
            <List>
              <ListItem>
                <StyledCheckbox
                  checked
                  onChange={() => console.log("check")}
                  label="United States"
                />
              </ListItem>
              <ListItem>
                <StyledCheckbox
                  checked={false}
                  onChange={() => console.log("check")}
                  label="Latvia"
                />
              </ListItem>
              <ListItem>
                <StyledCheckbox
                  checked={false}
                  onChange={() => console.log("check")}
                  label="Bulgaria"
                />
              </ListItem>
              <ListItem>
                <StyledCheckbox
                  checked={false}
                  onChange={() => console.log("check")}
                  label="Belgium"
                />
              </ListItem>
              <ListItem>
                <StyledCheckbox
                  checked={false}
                  onChange={() => console.log("check")}
                  label="Ukraine"
                />
              </ListItem>
              <ListItem>
                <StyledCheckbox
                  checked={false}
                  onChange={() => console.log("check")}
                  label="Peru"
                />
              </ListItem>
              <ListItem>
                <StyledCheckbox
                  checked={false}
                  onChange={() => console.log("check")}
                  label="France"
                />
              </ListItem>
            </List>
          </Collapse>
        </FilterSection>
        <Hr />
        <FilterSection>
          <Collapse title="Rattings">
            <List>
              <ListItem>Below 1</ListItem>
              <ListItem>1 to 2</ListItem>
              <ListItem>2 to 3</ListItem>
              <ListItem>3 to 4</ListItem>
              <ListItem>4++</ListItem>
            </List>
          </Collapse>
        </FilterSection>
        <Hr />
        <FilterSection>
          <Collapse title="Discount">
            <List>
              <ListItem>
                <StyledCheckbox
                  checked
                  onChange={() => console.log("check")}
                  label="Clear all"
                />
              </ListItem>
              <ListItem>
                <StyledCheckbox
                  checked={false}
                  onChange={() => console.log("check")}
                  label="0-20%"
                />
              </ListItem>
              <ListItem>
                <StyledCheckbox
                  checked={false}
                  onChange={() => console.log("check")}
                  label="21-30%"
                />
              </ListItem>
              <ListItem>
                <StyledCheckbox
                  checked={false}
                  onChange={() => console.log("check")}
                  label="31-40%"
                />
              </ListItem>
              <ListItem>
                <StyledCheckbox
                  checked={false}
                  onChange={() => console.log("check")}
                  label="41-50%"
                />
              </ListItem>
              <ListItem>
                <StyledCheckbox
                  checked={false}
                  onChange={() => console.log("check")}
                  label="51-60%"
                />
              </ListItem>
            </List>
          </Collapse>
        </FilterSection>
      </FiltersContainer>
      <ListingFilterMb />
    </>
  );
};

export default ListingFilter;
