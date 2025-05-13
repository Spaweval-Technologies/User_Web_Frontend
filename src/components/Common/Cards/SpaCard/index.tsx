import RatingStars from "../../RatingStars";
import Images from "../../../../../public/Images";

//props
import SpaCardProps from "./index.d";

//css
import {
  CardContent,
  CardDescription,
  CardImage,
  CardTitle,
  CardWrapper,
  Ratting,
  ReviewCount,
  Wrapper,
} from "./index.styles";

/**
 * Spa Card
 * @param {SpaCardProps} props - Props passed to the component.
 * @param {string} props.title - The spa's name or title.
 * @param {string} props.description - A short description of the spa service.
 * @param {string} props.img - The image URL representing the spa.
 * @param {string} props.alt - Alternate text for the image (for accessibility).
 * @param {number} props.numReviews - Number of reviews received by the spa.
 * @param {number} props.ratting - Average rating for the spa (e.g., 4.5).
 * @returns {JSX.Element} A styled spa card component.
 */
const SpaCard = ({
  title,
  description,
  img,
  alt,
  numReviews,
  ratting,
}: SpaCardProps) => {
  return (
    <CardWrapper>
      <CardImage
        src={img ?? Images.DestinationSpa}
        alt={alt ?? "spa"}
        width="100"
        height="100"
        loading="lazy"
      />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <Wrapper>
          <Ratting>{ratting}</Ratting>
           <RatingStars mobileheight={13} mobilewidth={13} iconHeight={15} iconWidth={15} rating={ratting} totalRating={1} />
          <ReviewCount>({numReviews} Reviews)</ReviewCount>
        </Wrapper>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardWrapper>
  );
};

export default SpaCard;
