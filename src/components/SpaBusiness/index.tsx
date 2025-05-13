import Icons from "@/Icons";

import RatingStars from "../Common/RatingStars";
import Images from "../../../public/Images";

//props
import SpaBusinessProps from "./index.d";

//css
import {
  BusinessImg,
  BusinessLaptopImgMb,
  Content,
  Description,
  FindMore,
  Ratting,
  Review,
  Title,
  Wrapper,
} from "./index.styles";

/**
 * SpaBusiness Component
 * @param {Object} props - The props for the SpaBusiness component
 * @param {number} props.rating - Average user rating (e.g., 4.5)
 * @param {number} props.reviews - Total number of user reviews
 * @param {string} props.title - Title of the business section
 * @param {string} props.description - Description of the feature
 * @param {string} props.findMoreUrl - URL for the "Find out More" button (currently unused)
 * @param {string} props.imgSrc - Image source URL representing the business feature
 * @param {string} props.alt - Alt text for the image (for accessibility)
 * @param {number} [props.iconWidth] - Optional width of the star icons
 * @param {number} [props.iconHeight] - Optional height of the star icons
 * @returns {JSX.Element} JSX layout with rating, reviews, description, CTA button, and image
 */
const SpaBusiness = ({
  rating,
  reviews,
  title,
  description,
  findMoreUrl,
  imgSrc,
  alt,
  iconWidth,
  iconHeight,
}: SpaBusinessProps) => {
  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <FindMore
          iconSrc={Icons.ArrowCircleRight}
          iconAlt="white right arrow circle"
          iconWidth={20}
          iconHeight={20}
          iconPosition="right">
          Find out More
        </FindMore>
        <Ratting>Excellent {rating}/5</Ratting>
        <RatingStars
          iconHeight={iconHeight ?? 29}
          iconWidth={iconWidth ?? 29}
          rating={rating}
          totalRating={5}
        />
        <Review>Over {reviews} reviews on</Review>
      </Content>
      <BusinessImg loading="lazy" src={imgSrc} alt={alt} />
      <BusinessLaptopImgMb
        loading="lazy"
        src={Images.BusinessLaptopMb}
        alt="mobile background business"
      />
    </Wrapper>
  );
};

export default SpaBusiness;
