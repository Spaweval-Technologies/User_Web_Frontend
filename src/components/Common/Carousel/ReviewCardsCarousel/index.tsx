import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import {
  CarouselWrapper,
  TitleWrapper,
  Wrapper,
} from "../SpaCardsCarousel/index.styles";
import ReviewCarouselProps from "./index.d";
import ReviewCard from "../../Cards/ReviewCard";
import Icon from "../../Icon";
import Icons from "@/Icons";

const ReviewCarousel = ({ title, reviewDetails }: ReviewCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: "auto",
      spacing: 31,
    },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <Wrapper>
      <TitleWrapper>{title ?? "Reviews"}</TitleWrapper>
      <CarouselWrapper>
        <div id="reviewCarousel" ref={sliderRef} className="keen-slider">
          {reviewDetails &&
            reviewDetails.map((review) => (
                <div id="reviewCarousel" className="keen-slider__slide" key={review.name} >
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
        </div>
        {loaded && instanceRef.current && (
          <>
            <Icon
              onClick={(e: any) => {
                e.stopPropagation();
                if (loaded && instanceRef.current) {
                  instanceRef.current.prev();
                }
              }}
              className={`arrow left-arrow ${
                currentSlide === 0 && "arrow--disabled"
              }`}
              width={48}
              height={48}
              src={Icons.LeftArrow}
            />
            <Icon
              className={`arrow right-arrow`}
              width={48}
              height={48}
              onClick={(e: any) => {
                e.stopPropagation();
                if (loaded && instanceRef.current) {
                  instanceRef.current.next();
                }
              }}
              src={Icons.RightArrow}
            />
          </>
        )}
      </CarouselWrapper>
    </Wrapper>
  );
};

export default ReviewCarousel;
