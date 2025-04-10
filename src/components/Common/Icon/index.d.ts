import { StaticImageData } from "next/image";

type IconProps = {
    src: string | StaticImageData;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
    onClick?: () => void;
    color?: string;
};

export default IconProps;