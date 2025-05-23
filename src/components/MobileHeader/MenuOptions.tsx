import { Fragment } from "react";

//props
import { MenuListProps } from "./index.d";

//css
import {
  List,
  ListItem,
  ListItemLink,
  ListTitle,
  StyledIconBtn,
} from "./index.styles";

/**
 * MenuOptions Component
 * @param {MenuListProps} props - The props object.
 * @param {Array} props.menuOptions - An array of grouped menu options or flat options to render in the menu.
 * @returns {JSX.Element} A styled list of navigational menu items.
 */
const MenuOptions = ({ menuOptions }: MenuListProps) => {
  return (
    <List>
      {menuOptions.map((grpOptionOrOption, id) => {
        if ("options" in grpOptionOrOption) {
          return (
            <Fragment key={grpOptionOrOption.label + id}>
              <ListTitle>{grpOptionOrOption.label}</ListTitle>
              {grpOptionOrOption?.options &&
                grpOptionOrOption.options.map((opt, id) => (
                  <ListItem key={opt.label + id}>
                    <ListItemLink href="#">
                      {opt?.icon ? (
                        <StyledIconBtn
                          iconSrc={opt.icon}
                          iconAlt="profile Icon"
                          iconWidth={22}
                          iconHeight={22}
                        >
                          {opt.label}
                        </StyledIconBtn>
                      ) : (
                        <Fragment>{opt.label}</Fragment>
                      )}
                    </ListItemLink>
                  </ListItem>
                ))}
            </Fragment>
          );
        }
      })}
    </List>
  );
};

export default MenuOptions;
