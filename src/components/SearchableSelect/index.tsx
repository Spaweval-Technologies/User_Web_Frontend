"use client";
import { components } from "react-select";
import dynamic from "next/dynamic";
import Icons from "@/Icons";

import Icon from "../Common/Icon";
import { useTheme } from "styled-components";

//css
import { SelectWrapper } from "./index.styles";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "grape", label: "Grape" },
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
          }),
          control: (base) => ({
            ...base,
            border: "1px solid #EBEBEB",
            width: "100%",
            padding: "10px 13px",
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
        }}
      />
    </SelectWrapper>
  );
};

export default SearchableSelect;
