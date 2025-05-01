import Icons from "@/Icons";
import Icon from "../Icon";

import RatingStarsProps from "./index.d";

//css
import { Stars } from "./index.styles";

/**
 * RatingStars Component
 * @param {Object} props - The props for the component.
 * @param {number} props.iconWidth - Optional width of each star icon.
 * @param {number} props.iconHeight - Optional height of each star icon.
 * @param {number} props.rating - The current rating value (e.g., 4.2).
 * @param {number} [props.totalRating=5] - Total number of stars to display.
 * @returns {JSX.Element} The rendered star rating component.
 */
const RatingStars = ({
  iconWidth = 29,
  iconHeight = 29,
  rating,
  totalRating = 5,
  mobileWidth,
  mobileHeight,
}: RatingStarsProps) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;
  const totalStars = totalRating;

  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    if (i < filledStars) {
      stars.push(
        <Icon
          key={i}
          src={Icons.StarFill}
          alt="filled"
          width={iconWidth ?? 29}
          height={iconHeight ?? 29}
          mobileHeight={mobileHeight ?? 29}
          mobileWidth={mobileWidth ?? 29}
        />
      );
    }
    // else if (i === filledStars && hasHalfStar) {
    //     stars.push(<Icon key={i} src={Icons.StarHalf} alt="half" width={20} height={20} />);
    // }
    else {
      stars.push(
        <Icon
          key={i}
          src={Icons.StarGray}
          alt="empty"
          width={iconWidth ?? 29}
          height={iconHeight ?? 29}
          mobileHeight={mobileHeight ?? 29}
          mobileWidth={mobileWidth ?? 29}
        />
      );
    }
  }

  return <Stars>{stars}</Stars>;
};

export default RatingStars;
