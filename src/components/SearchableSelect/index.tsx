"use client";
import { components } from "react-select";
import dynamic from "next/dynamic";
import Icons from "@/Icons";

import Icon from "../Common/Icon";
import { useTheme } from "styled-components";

//css
import { SelectWrapper } from "./index.styles";

const options = [
  {
    label: "All categories",
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry" },
      { value: "date", label: "Date" },
      { value: "grape", label: "Grape" },
    ],
  },
];

const SearchSelect = dynamic(() => import("react-select"), { ssr: false });

/*
 * CustomControl component
 * @param {any} props - The props passed to the component.
 * @returns {JSX.Element} - A custom control component for the select input.
 */
const CustomControl = (props: any) => (
  <components.Control {...props}>
    <span className="ml-3 mr-2">
      <Icon src={Icons.Search} alt="search" width={20} height={20} />
    </span>
    {props.children}
  </components.Control>
);

/**
 * SearchableSelect component
 * @returns {JSX.Element} - A searchable select component with custom styles and functionality.
 */
const SearchableSelect = () => {
  const theme = useTheme();
  const handleChange = (selectedOption: any) => {
    console.log("Selected:", selectedOption);
  };

  return (
    <SelectWrapper>
      <SearchSelect
        classNamePrefix="react-select"
        options={options}
        onChange={handleChange}
        placeholder="All Categories"
        isSearchable
        components={{
          Control: CustomControl,
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        styles={{
          container: (base) => ({
            ...base,
            width: "100%", // Default full width
            height: "100%",
          }),
          control: (base, state) => ({
            ...base,
            width: "100%",
            color: theme.colors.secondary,
            fontWeight: theme.fontWeights.bold,
            background: state.menuIsOpen ? theme.colors.grey : theme.colors.transparent,
          }),
          placeholder: (base) => ({
            ...base,
            color: theme.colors.secondary,
            fontWeight: theme.fontWeights.bold,
          }),
          input: (base) => ({
            ...base,
            border: "none",
          }),
          menu: (base) => ({
            ...base,
            
            width: 'max-content',
            minWidth: '100%',
            boxSizing: 'border-box',
            backgroundColor: theme.colors.background,
            borderRadius: "10px 0 0 10px",
            boxShadow: `0 4px 10px ${theme.colors.transparentGrey}`,
            overflow: "hidden",
            zIndex: 20,
          }),
          menuList: (base) => ({
            ...base,
            padding: '12px 16px',
            maxHeight: "350px",
            overflowY: "auto",
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              width: "6px",
              background: theme.colors.lightBlue,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.colors.lightBlue,
              borderRadius: "10px",
            },
          }),
          option: (base, { isFocused, isSelected }) => ({
            ...base,
            fontSize: '14px',
            padding: "10px 16px",
            marginBottom: "4px",
            backgroundColor: isSelected
              ? theme.colors.primary
              : isFocused
              ? theme.colors.primary // slight transparent hover
              : theme.colors.transparent,
            color: isSelected
              ? theme.colors.textSecondary
              : theme.colors.secondary,
            cursor: "pointer",
            fontWeight: isSelected
              ? theme.fontWeights.bolder
              : theme.fontWeights.medium,
            transition: "all 0.2s",
            borderRadius:'12px',
            "&:hover": {
              backgroundColor: theme.colors.secondary+"20",
            },
          }),
          groupHeading: (base) => ({
            ...base,
            color: theme.colors.secondary,
            padding: "8px 12px",
            fontWeight: theme.fontWeights.bold,
            fontSize: "16px",
            borderBottom: `1px solid ${theme.colors.lightBluishColor}`,
            marginBottom: "4px",
          }),
        }}
      />
    </SelectWrapper>
  );
};

export default SearchableSelect;
