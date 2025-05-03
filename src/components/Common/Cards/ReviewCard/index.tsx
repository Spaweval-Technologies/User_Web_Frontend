import Icons from "@/Icons";

import Review from "../../Review";
import ReviewCardProps from "./index.d";

//css
import {
  CardWrapper,
  Content,
  Description,
  Location,
  Name,
  ProfileContainer,
  ProfileImg,
} from "./index.styles";

/**
 * ReviewCard Component
 * Displays a user's review card including their profile image, rating, review description, name, and location.
 * @param {Object} props - Props for the ReviewCard component
 * @param {string} props.img - URL of the profile image (optional; defaults to a placeholder icon if not provided)
 * @param {string} props.alt - Alternate text for the profile image
 * @param {string} props.description - The review text or testimonial from the user
 * @param {string} props.name - The name of the reviewer
 * @param {string} props.location - The location of the reviewer
 * @param {number} props.totalRating - Total number of stars in the rating system (typically 5)
 * @param {number} props.rating - Actual rating value (e.g., 4.2)
 * @param {number} props.reviews - Total number of reviews
 * @returns {Jsx.Element} A styled review card component
 */
const ReviewCard = ({
  img,
  alt,
  description,
  name,
  location,
  totalRating,
  rating,
  reviews,
}: ReviewCardProps) => {
  return (
    <CardWrapper>
      <ProfileContainer>
        <ProfileImg
          src={img ?? Icons.ProfileImg}
          alt={alt ?? "profile"}
          width={61}
          height={61}
        />
        <Review
          starCount={totalRating ?? 5}
          rating={rating ?? 4.2}
          reviews={reviews ?? 52}
          mobilewidth={20}
          mobileheight={20}
        />
        <Description>{description}</Description>
      </ProfileContainer>
      <Content>
        <Name>{name}</Name>
        <Location>{location}</Location>
      </Content>
    </CardWrapper>
  );
};

export default ReviewCard;
