import Images from "../../../../../public/Images";

//props
import CategoryCardProps from "./index.d";

//css
import {
  BookNow,
  CategoryCardImage,
  CategoryCardWrapper,
  Description,
  Title,
} from "./index.styles";

/**
 * Category Card
 * @param {string} title - The title text displayed on the card.
 * @param {string} description - The description text displayed below the title.
 * @param {string} color - The color used for text and button styling.
 * @param {string} img - The image source URL.
 * @param {string} alt - Alternate text for the image (used for accessibility).
 * @param {function} onClick - Optional click handler for the card.
 * @param {string} className - Optional additional class name for styling overrides.
 * @param {object} style - Optional inline styles to apply to the card wrapper.
 * @returns {JSX.Element} A styled category card component.
 */
const CategoryCard = ({
  title,
  description,
  color,
  img,
  alt,
  onClick,
  className,
  style,
}: CategoryCardProps) => {
  return (
    <CategoryCardWrapper onClick={onClick} className={className} style={style}>
      <CategoryCardImage
        src={img ?? Images.Swedish}
        alt={alt ?? "swedish"}
        width={"100"}
        height="100"
        loading="lazy"
      />
      <Title color={color}>{title}</Title>
      <Description color={color}>{description}</Description>
      <BookNow color={color}>Book Now</BookNow>
    </CategoryCardWrapper>
  );
};

export default CategoryCard;
