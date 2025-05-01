import { StaticImageData } from "next/image";

type SpaBusinessProps = {
    rating: number,
    reviews: number,
    title: string,
    description: string,
    findMoreUrl: string,
    imgSrc: string | StaticImageData,
    alt: string,
    iconWidth?: number,
    iconHeight?: number,
}

export default SpaBusinessProps;