import Icons from "@/Icons";
import Icon from "../Icon";

//props
import SliderProps from "./index.d";

//css
import { Backdrop, SliderWrapper } from "./index.styles";

/**
 * SliderMb (Mobile Slider) component.
 * Renders a sliding drawer from the side of the screen with a backdrop.
 * Commonly used for mobile menus or side panels.
 * @param {SliderProps} props - Props for the SliderMb component
 * @param {React.ReactNode} props.children - The content to render inside the slider
 * @param {boolean} props.showSlider - Controls whether the slider is visible
 * @param {() => void} props.onClose - Callback function to close the slider
 * @param {string} [props.className] - Optional additional class name(s) for styling
 * @returns {JSX.Element} A mobile-friendly slide-in panel with backdrop
 */
const SliderMb = ({
  children,
  showSlider,
  onClose,
  className,
}: SliderProps) => {
  return (
    <>
      <Backdrop showSlider={showSlider} onClick={onClose} />
      <SliderWrapper showSlider={showSlider} className={className}>
        <Icon src={Icons.ArrowRight} alt="left arrow" onClick={onClose} />
        {children}
      </SliderWrapper>
    </>
  );
};

export default SliderMb;
