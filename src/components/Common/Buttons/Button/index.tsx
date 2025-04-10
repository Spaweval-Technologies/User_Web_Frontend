"use client";

import ButtonProps from "./index.d";

//css
import StyledButton from "./index.styles";

/*
  Button component
  @param {React.ReactNode | string} children - The content of the button.
  @param {string} className - Additional classes for styling.
  @param {() => void} onClick - Function to call on button click.
  @param {boolean} disabled - If true, the button is disabled.
  @param {"button" | "submit" | "reset"} type - The type of the button.
  @returns {JSX.Element} - A styled button element.
*/
const Button = ({ children, className, onClick, disabled, type }: ButtonProps) => {
  return (
    <StyledButton className={className} onClick={onClick} disabled={disabled} type={type} >
      {children}
    </StyledButton>
  );
};

export default Button;
