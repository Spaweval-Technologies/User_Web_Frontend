import Icons from "@/Icons";
import Icon from "../Icon";

import ReviewProps from "./index.d";

//css
import { Ratting, ReviewCount, ReviewWrapper } from "./index.styles";

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
 * @returns {JSX.Element} A UI component showing rating stars and review count
 */
const Review = ({ show = false, iconWidth, iconHeight, starCount, rating, reviews }: ReviewProps) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;
  const totalStars = starCount;

  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    if (i < filledStars) {
      stars.push(
        <Icon
          key={i}
          src={Icons.StarFill}
          alt="filled"
          width={iconWidth ?? 20}
          height={iconHeight ?? 20}
        />
      );
    }
    // else if (i === filledStars && hasHalfStar) {
    //     stars.push(<Icon key={i} src={Icons.StarHalf} alt="half" width={20} height={20} />);
    // }
    else {
      stars.push(
        <Icon key={i} src={Icons.StarGray} alt="empty" width={20} height={20} />
      );
    }
  }

  return (
    <ReviewWrapper>
      {show && <Ratting>{rating}</Ratting>}
      {stars}
      <ReviewCount>({reviews} reviews)</ReviewCount>
    </ReviewWrapper>
  );
};

export default Review;
