import { StaticImageData } from "next/image";

type ListingCardProps = {
    imgSrc: string | StaticImageData;
    imgAlt?: string;
    title: string;
    description: string;
    saved: boolean;
    rating: number;
    reviews: number;
    discount?: number;
}

export default ListingCardProps;