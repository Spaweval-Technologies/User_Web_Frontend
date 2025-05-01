import Icons from "@/Icons";
import Icon from "../Icon";

import ReviewProps from "./index.d";

//css
import { Ratting, ReviewCount, ReviewWrapper } from "./index.styles";
import RatingStars from "../RatingStars";

/**
 * Review Component
 * Displays a star-based visual rating along with the number of reviews and an optional numeric rating.
 * @param {Object} props - Props for the Review component
 * @param {number} iconWidth - Optional. Width of each star icon.
 * @param {number} iconHeight - Optional. Height of each star icon.
 * @param {boolean} [props.show=false] - Flag to show or hide the numeric rating value
 * @param {number} props.starCount - Total number of stars to display (typically 5)
 * @param {number} props.rating - Actual rating value (e.g., 4.2)
 * @param {number} props.reviews - Total number of user reviews
 * @param {number} [props.mobileWidth] - Optional. Width of the star icons for mobile view
 * @param {number} [props.mobileHeight] - Optional. Height of the star icons for mobile view
 * @returns {JSX.Element} A UI component showing rating stars and review count
 */
const Review = ({
  show = false,
  iconWidth,
  iconHeight,
  starCount,
  rating,
  reviews,
  mobileWidth,
  mobileHeight,
}: ReviewProps) => {
  return (
    <ReviewWrapper>
      {show && <Ratting>{rating}</Ratting>}
      <RatingStars
        iconHeight={iconHeight}
        iconWidth={iconWidth}
        rating={rating}
        totalRating={starCount}
        mobileWidth={mobileWidth}
        mobileHeight={mobileHeight}
      />
      <ReviewCount>({reviews} reviews)</ReviewCount>
    </ReviewWrapper>
  );
};

export default Review;
