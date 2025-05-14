//props
import Icons from "@/Icons";
import Icon from "../Icon";
import CheckboxProps from "./index.d";

//css
import {
  CheckboxWrapper,
  HiddenCheckbox,
  LabelText,
  StyledBox,
} from "./index.styles";

/**
 * StyledCheckbox Component
 * @param {CheckboxProps} props - The props for the checkbox component.
 * @param {boolean} props.checked - Whether the checkbox is checked.
 * @param {(checked: boolean) => void} props.onChange - Callback fired when the checkbox state changes.
 * @param {string} props.label - The label displayed next to the checkbox.
 * @returns {JSX.Element} The rendered styled checkbox component.
 */
const StyledCheckbox = ({
  checked,
  onChange,
  label,
  position = "left",
}: CheckboxProps) => {
  return (
    <CheckboxWrapper>
      <HiddenCheckbox
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {position === "left" && (
        <StyledBox checked={checked}>
          <Icon
            src={Icons.CheckboxTickMark}
            alt="tick mark"
            width={14}
            height={14}
          />
        </StyledBox>
      )}
      <LabelText>{label}</LabelText>
      {position === "right" && (
        <StyledBox checked={checked}>
          <Icon
            src={Icons.CheckboxTickMark}
            alt="tick mark"
            width={14}
            height={14}
          />
        </StyledBox>
      )}
    </CheckboxWrapper>
  );
};

export default StyledCheckbox;
