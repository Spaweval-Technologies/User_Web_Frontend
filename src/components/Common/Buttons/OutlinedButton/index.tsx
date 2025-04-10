import OutlinedButtonProps from "./index.d";

//css
import { OutlinedButton } from "./index.styles";

/*
  * OutlinedButton component
  * @param {string} children - The content of the button
  * @param {function} onClick - The function to call when the button is clicked
  * @param {string} className - The class name to apply to the button
  * @param {boolean} disabled - Whether the button is disabled
  * @param {string} type - The type of the button (button, submit, reset)
  * @returns {JSX.Element}
*/
const SecondaryButton = ({children, className, onClick, disabled, type }: OutlinedButtonProps) => { 
  return (
    <OutlinedButton className={className} onClick={onClick} disabled={disabled} type={type}>{children}</OutlinedButton>
  );
}

export default SecondaryButton;