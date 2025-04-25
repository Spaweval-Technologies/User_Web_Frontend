import Image from "next/image";

import ImageProps from "./index.d";

/**
 * StyledImage component
 * @param {string} src - The source of the image.
 * @param {number} width - The width of the image.
 * @param {number} height - The height of the image.
 * @param {string} alt - The alt text for the image.
 * @param {string} className - Additional classes for styling.
 * @returns {JSX.Element} - An image element with specified properties.
 */
const StyledImage = ({ src, alt, width, height, className }: ImageProps) => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={src}
        alt={alt ?? "Background"}
        width={width ?? 100}
        height={height ?? 100}
        className={className}
      />
    </div>
  );
};

export default StyledImage;
