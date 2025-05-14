import { ReactElement, ReactNode, RefObject } from "react"

type CarouselProps = {
    children: ReactNode | ReactNode[] | ReactElement | ReactElement[];
    id?: string;
};

export default CarouselProps;