import Icon from "@/components/Common/Icon";

//props
import IconButtonProps from "./index.d"

//css
import { StyledIconButton } from "./index.styles";

/**
  IconButton component
  @param {React.ReactNode | string} children - The content of the button.
  @param {string} iconSrc - The source of the icon image.
  @param {string} iconAlt - The alt text for the icon image.
  @param {number} iconWidth - The width of the icon image.
  @param {number} iconHeight - The height of the icon image.
  @param {string} className - Additional classes for styling.
  @param {string} iconClassName - Additional classes for styling the icon.
  @param {() => void} onClick - Function to call on button click.
  @param {boolean} disabled - If true, the button is disabled.
  @param {"button" | "submit" | "reset"} type - The type of the button.
  @param {() => void} onMouseEnter - Function to call on mouse over the button. d 
  @returns {JSX.Element} - A styled button element with an icon.
*/
const IconButton = ({
  children,
  disabled,
  onClick,
  className,
  iconClassName,
  type,
  iconSrc,
  iconAlt,
  iconWidth,
  iconHeight,
  iconPosition = "left",
  onMouseEnter
}: IconButtonProps) => {
  return (
    <StyledIconButton disabled={disabled} type={type} onClick={onClick} className={className} onMouseEnter={onMouseEnter}>
      {iconPosition === "left" && <Icon src={iconSrc} alt={iconAlt} width={iconWidth} height={iconHeight} className={iconClassName} />}
      {children}
      {iconPosition === "right" && <Icon src={iconSrc} alt={iconAlt} width={iconWidth} height={iconHeight} className={iconClassName} />}
    </StyledIconButton>
  );
};

export default IconButton;
