import Icons from "@/Icons";
import Images from "../../../../../public/Images";
import Icon from "../../Icon";
import RatingStars from "../../RatingStars";

//props
import ListingCardProps from "./index.d";

//css
import {
  CardImage,
  Container,
  Description,
  Discount,
  Hr,
  ListingCardWrapper,
  ReviewWrapper,
  Title,
  TitleWrapper,
  Wrapper,
} from "./index.styles";

/**
 * ListingCard Component
 * Displays individual spa listing information including image, title, description,
 * rating stars, number of reviews, and discount.
 * @param {Object} props - ListingCard props
 * @param {string} props.imgSrc - Image source URL or path for the spa (optional fallback included)
 * @param {string} props.imgAlt - Alternative text for the image (optional fallback included)
 * @param {string} props.title - Title of the spa
 * @param {string} props.description - Short description of spa facilities or location
 * @param {boolean} props.saved - Whether the spa is marked as saved/favorited
 * @param {number} props.rating - Spa rating value (e.g., 4.2)
 * @param {number} props.reviews - Number of reviews (e.g., 1120)
 * @param {string} props.discount - Discount string, just the number (e.g., "22")
 * @returns {JSX.Element} A styled card component displaying the provided spa listing data
 */
const ListingCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
  saved,
  rating,
  reviews,
  discount,
}: ListingCardProps) => {
  return (
    <ListingCardWrapper>
      <CardImage
        src={imgSrc ?? Images.DestinationSpa1}
        height={266}
        width={325}
        loading="lazy"
        alt={imgAlt ?? "destination spa"}
      />
      <Container>
        <TitleWrapper>
          <Title>{title}</Title>
          <Icon src={Icons.Saved} width={24} height={24} alt="save icon" />
        </TitleWrapper>
        <Description>{description}</Description>
        <Wrapper>
          <ReviewWrapper>
            <RatingStars
              iconWidth={17}
              iconHeight={17}
              rating={rating}
              totalRating={5}
              mobileheight={21}
              mobilewidth={21}
            />
            ({reviews})
          </ReviewWrapper>
          <Hr />
          <Discount>
            {discount}
            <span>% Off</span>
          </Discount>
        </Wrapper>
      </Container>
    </ListingCardWrapper>
  );
};

export default ListingCard;
