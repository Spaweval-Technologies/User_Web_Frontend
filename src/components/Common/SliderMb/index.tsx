import Icons from "@/Icons";
import Icon from "../Icon";

import SliderProps from "./index.d";

//css
import { SliderWrapper } from "./index.styles";

const SliderMb = ({ children, showSlider, onClose }: SliderProps) => {
  return (
    <SliderWrapper showSlider={showSlider}>
      <Icon src={Icons.ArrowRight} alt="left arrow" onClick={onClose} />
      {children}
    </SliderWrapper>
  );
};

export default SliderMb;
