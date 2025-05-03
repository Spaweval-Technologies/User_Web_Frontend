import { StaticImageData } from "next/image";

type SpaCardProps = {
    title: string,
    description: string,
    img: string | StaticImageData,
    alt?: string,
    numReviews: number,
    ratting: number
}

export default SpaCardProps;