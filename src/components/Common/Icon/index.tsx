import Image from "next/image";

import IconProps from "./index.d";
import { IconWrapper } from "./index.styles";

/**
  Icon component
  @param {string | StaticImageData} src - The source of the icon image.
  @param {number} width - The width of the icon image.
  @param {number} height - The height of the icon image.
  @param {string} alt - The alt text for the icon image.
  @param {string} className - Additional classes for styling.
  @param {() => void} onClick - Function to call on icon click.
  @param {string} color - The color of the icon.
  @param {number} mobileWidth - The width of the icon image on mobile.
  @param {number} mobileHeight - The height of the icon image on mobile.
  @returns {JSX.Element} - An image element with specified properties.
*/
const Icon = ({
  src,
  width,
  height,
  alt,
  className,
  onClick,
  color,
  mobileWidth,
  mobileHeight,
}: IconProps) => {
  return (
    <IconWrapper
      src={src}
      alt={alt ?? "Logo"}
      width={width ?? 24}
      height={height ?? 24}
      className={className}
      onClick={onClick}
      color={color}
      mobileWidth={mobileWidth}
      mobileHeight={mobileHeight}
    />
  );
};

export default Icon;
