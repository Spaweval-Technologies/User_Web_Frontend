"use client";
import { useEffect, useRef, useState } from "react";

import Icons from "@/Icons";
import StyledSelectProps from "./index.d";

//css
import {
  DropdownWrapper,
  SelectedValue,
  DropdownList,
  DropdownItem,
  ArrowIcon,
  GroupLabel,
  GroupOptions,
  Hr,
} from "./index.styles";

/**
 * StyledSelect component
 * @param {string} value - The selected value of the select input.
 * @param {function} onChange - The function to call when the selected value changes.
 * @param {boolean} disabled - Whether the select input is disabled.
 * @param {string} autoComplete - The autocomplete attribute for the select input.
 * @param {boolean} autoFocus - Whether the select input should be focused automatically.
 * @param {Array<{ label: string; value: string }>} options - The options for the select input.
 * @param {string} defaultText - to show default selected option or placeholder value
 * @returns {JSX.Element} - A styled select input element with specified properties.
 */
const StyledSelect = ({
  value,
  onChange,
  disabled,
  options,
  defaultText,
}: StyledSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownDirection, setDropdownDirection] = useState<"left" | "right">(
    "left"
  );

  const selectedOptionLabel = (() => {
    for (const option of options) {
      if ("options" in option) {
        const found = option.options.find((opt) => opt.value === value);
        if (found) return found.label;
      } else if (option.value === value) {
        return option.label;
      }
    }
    return null;
  })();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    onChange && onChange(val);
    setIsOpen(false);
  };

  const handleOpen = () => {
    if (!disabled) {
      const rect = dropdownRef.current?.getBoundingClientRect();
      const dropdownWidth = dropdownRef.current?.offsetWidth || 230; // Fallback width

      if (rect) {
        const spaceRight = window.innerWidth - rect.right;
        const spaceLeft = rect.left;

        if (spaceRight < dropdownWidth && spaceLeft > dropdownWidth) {
          // 200px assumed dropdown width, adjust if needed
          setDropdownDirection("left");
        } else {
          setDropdownDirection("right");
        }
      }
      setIsOpen(!isOpen);
    }
  };

  return (
    <DropdownWrapper ref={dropdownRef} disabled={disabled}>
      <SelectedValue onClick={handleOpen}>
        {selectedOptionLabel || defaultText}
        <ArrowIcon
          src={isOpen ? Icons.UpArrow : Icons.DownArrow}
          alt="arrow"
          width={12}
          height={12}
        />
      </SelectedValue>
      {isOpen && (
        <DropdownList direction={dropdownDirection}>
          {options.map((optGroupOrOption) => {
            if ("options" in optGroupOrOption) {
              return (
                <GroupOptions key={optGroupOrOption.label}>
                  <GroupLabel>{optGroupOrOption.label}</GroupLabel>
                  {optGroupOrOption.options.map((opt) => (
                    <DropdownItem
                      child={opt.child ? true : false}
                      key={opt.value}
                      onClick={() => handleSelect(opt.value)}
                    >
                      {opt.child ? opt.child : opt.label}
                    </DropdownItem>
                  ))}
                  <Hr />
                </GroupOptions>
              );
            } else {
              return (
                <DropdownItem
                  child={optGroupOrOption.child ? true : false}
                  key={optGroupOrOption.value}
                  onClick={() => handleSelect(optGroupOrOption.value)}
                >
                  {optGroupOrOption.child
                    ? optGroupOrOption.child
                    : optGroupOrOption.label}
                </DropdownItem>
              );
            }
          })}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default StyledSelect;
