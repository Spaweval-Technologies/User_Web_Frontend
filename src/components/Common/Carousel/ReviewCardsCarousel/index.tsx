import ReviewCard from "../../Cards/ReviewCard";
import Carousel from "../Carousel";

//props
import ReviewCarouselProps from "./index.d";

//css
import {
  CarouselMobileWrapper,
  TitleWrapper,
  Wrapper,
} from "../SpaCardsCarousel/index.styles";

/**
 * ReviewCarousel Component
 * @param {Object} props - Component props
 * @param {string} [props.title] - Optional title to display above the carousel (defaults to "Reviews")
 * @param {Array<Object>} props.reviewDetails - Array of review objects to render inside the carousel
 * @param {string} props.reviewDetails[].name - Reviewer's name
 * @param {string} props.reviewDetails[].location - Reviewer's location
 * @param {string} props.reviewDetails[].img - Image URL or path for the reviewer
 * @param {string} props.reviewDetails[].alt - Alt text for the image
 * @param {number} props.reviewDetails[].totalRating - Max rating value (e.g., 5)
 * @param {number} props.reviewDetails[].rating - Actual rating given by the reviewer
 * @param {string} props.reviewDetails[].reviews - Total number of reviews or review context
 * @param {string} props.reviewDetails[].description - Review description or comment
 * @returns {JSX.Element} A component rendering a review carousel with navigation controls and a mobile fallback view
 */
const ReviewCarousel = ({ title, reviewDetails }: ReviewCarouselProps) => {
  return (
    <Wrapper>
      <TitleWrapper>{title ?? "Reviews"}</TitleWrapper>
      <Carousel id="reviewCarousel">
        {reviewDetails &&
          reviewDetails.map((review, id) => (
            <div className="keen-slider__slide" key={review.name + id}>
              <ReviewCard
                name={review.name}
                location={review.location}
                img={review.img}
                alt={review.alt}
                totalRating={review.totalRating}
                rating={review.rating}
                reviews={review.reviews}
                description={review.description}
              />
            </div>
          ))}
      </Carousel>
      <CarouselMobileWrapper>
        {reviewDetails &&
          reviewDetails.map((review, id) => (
            <ReviewCard
              key={review.name + id}
              name={review.name}
              location={review.location}
              img={review.img}
              alt={review.alt}
              totalRating={review.totalRating}
              rating={review.rating}
              reviews={review.reviews}
              description={review.description}
            />
          ))}
      </CarouselMobileWrapper>
    </Wrapper>
  );
};

export default ReviewCarousel;
