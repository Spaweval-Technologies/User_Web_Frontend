import { StaticImageData } from "next/image";

type IconProps = {
    src: string | StaticImageData;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
    onClick?: (e?:any) => void;
    color?: string;
    mobilewidth?: number;
    mobileheight?: number;
};

export default IconProps;