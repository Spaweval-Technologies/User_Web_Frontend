'use client';
import { useEffect, useRef, useState } from 'react';

import Icons from '@/Icons';

//props
import StyledSelectProps from './index.d';

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
} from './index.styles';
import { StyledIconBtn } from '@/components/MobileHeader/index.styles';

/**
 * StyledSelect component
 * @param {string} value - The selected value of the select input.
 * @param {function} onChange - The function to call when the selected value changes.
 * @param {boolean} disabled - Whether the select input is disabled.
 * @param {string} autoComplete - The autocomplete attribute for the select input.
 * @param {boolean} autoFocus - Whether the select input should be focused automatically.
 * @param {Array<{ label: string; value: string }>} options - The options for the select input.
 * @param {string} defaultText - to show default selected option or placeholder value
 * @param {string} position - The position of the dropdown (left or right).
 *  @returns {JSX.Element} - A styled select input element with specified properties.
 */
const StyledSelect = ({
  value,
  onChange,
  disabled,
  options,
  defaultText,
  position = 'left',
}: StyledSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = (() => {
    for (const option of options) {
      if ('options' in option) {
        const found = option.options.find((opt) => opt.value === value);
        if (found) return found;
      } else if (option.value === value) {
        return option;
      }
    }
    return null;
  })();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    onChange && onChange(val);
    setIsOpen(false);
  };

  const handleOpen = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <DropdownWrapper ref={dropdownRef} disabled={disabled}>
      <SelectedValue onClick={handleOpen}>
        {selectedOption && selectedOption?.icon ? (
          <StyledIconBtn
            iconSrc={selectedOption.icon}
            iconAlt={selectedOption.label}
            iconWidth={22}
            iconHeight={22}
            iconPosition="left"
          >
            {selectedOption?.label}
          </StyledIconBtn>
        ) : (
          selectedOption?.label || defaultText
        )}
        <ArrowIcon
          src={isOpen ? Icons.UpArrow : Icons.DownArrow}
          alt="arrow"
          width={12}
          height={12}
        />
      </SelectedValue>
      {isOpen && (
        <DropdownList direction={position}>
          {options.map((optGroupOrOption) => {
            if ('options' in optGroupOrOption) {
              return (
                <GroupOptions key={optGroupOrOption.label}>
                  <GroupLabel>{optGroupOrOption.label}</GroupLabel>
                  {optGroupOrOption.options.map((opt) => (
                    <DropdownItem
                      child={opt.child ? true : false}
                      key={opt.value}
                      onClick={() => handleSelect(opt.value)}
                    >
                      {opt.icon ? (
                        <StyledIconBtn
                          iconSrc={opt.icon}
                          iconAlt={opt.label}
                          iconWidth={22}
                          iconHeight={22}
                          iconPosition="left"
                        >
                          {opt.label}
                        </StyledIconBtn>
                      ) : opt.child ? (
                        opt.child
                      ) : (
                        opt.label
                      )}
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
                  {optGroupOrOption.icon ? (
                    <StyledIconBtn
                      iconSrc={optGroupOrOption.icon}
                      iconAlt={optGroupOrOption.label}
                      iconWidth={22}
                      iconHeight={22}
                      iconPosition="left"
                    >
                      {optGroupOrOption.label}
                    </StyledIconBtn>
                  ) : optGroupOrOption.child ? (
                    optGroupOrOption.child
                  ) : (
                    optGroupOrOption.label
                  )}
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
