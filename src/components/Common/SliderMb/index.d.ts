import { ReactElement, ReactNode } from "react"

type SliderProps = {
    children: ReactNode | ReactElement | ReactNode[];
    showSlider: boolean;
    onClose: () => void;
    className?: string;
}

export default SliderProps;