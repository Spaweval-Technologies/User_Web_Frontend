"use client";

import StyledSelectProps from "./index.d";

//css
import { Option, Select } from "./index.styles";

/**
 * StyledSelect component
 * @param {string} value - The selected value of the select input.
 * @param {function} onChange - The function to call when the selected value changes.
 * @param {boolean} disabled - Whether the select input is disabled.
 * @param {string} autoComplete - The autocomplete attribute for the select input.
 * @param {boolean} autoFocus - Whether the select input should be focused automatically.
 * @param {Array<{ label: string; value: string }>} options - The options for the select input.
 * @returns {JSX.Element} - A styled select input element with specified properties.
 */
const StyledSelect = ({
  value,
  onChange,
  disabled,
  autoComplete,
  autoFocus,
  options,
}: StyledSelectProps) => {
  return (
    <Select
      value={value}
      autoComplete={autoComplete ?? "on"}
      autoFocus={autoFocus ?? true}
      onChange={(e) => onChange && onChange(e.target.value)}
      disabled={disabled}
    >
      <Option>Select </Option>
      {options.map((opt) => (
        <Option key={opt.value} value={opt.value}>
          {opt.label}
        </Option>
      ))}
    </Select>
  );
};

export default StyledSelect;
