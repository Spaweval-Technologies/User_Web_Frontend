import { StaticImageData } from "next/image";

type CategoryCardProps = {
    color: string,
    title: string,
    description: string,
    img: string | StaticImageData,
    onClick?: () => void,
    className?: string,
    style?: React.CSSProperties,
    alt?: string,
}

export default CategoryCardProps;