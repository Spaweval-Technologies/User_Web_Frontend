import { ReactElement, ReactNode } from "react"

type SliderProps = {
    children: ReactNode | ReactElement | ReactNode[];
    showSlider: boolean;
    onClose: () => void;
}

export default SliderProps;