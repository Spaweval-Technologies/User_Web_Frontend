import Image from "next/image";

import IconProps from "./index.d";

/*
  Icon component
  @param {string | StaticImageData} src - The source of the icon image.
  @param {number} width - The width of the icon image.
  @param {number} height - The height of the icon image.
  @param {string} alt - The alt text for the icon image.
  @param {string} className - Additional classes for styling.
  @param {() => void} onClick - Function to call on icon click.
  @param {string} color - The color of the icon.
  @returns {JSX.Element} - An image element with specified properties.
*/
const Icon = ({src,width,height,alt,className,onClick, color}: IconProps) => {
    return (
        <Image
            src={src}
            alt={alt ?? "Logo"}
            width={width ?? 24}
            height={height ?? 24}
            className={className}
            onClick={onClick}
            color={color}
            style={{cursor: "pointer"}}
        />
    );
};

export default Icon;