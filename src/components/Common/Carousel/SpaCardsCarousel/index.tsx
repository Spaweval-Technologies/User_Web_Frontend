import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

import Icons from "@/Icons";
import Icon from "../../Icon";
import SpaCard from "../../Cards/SpaCard";

//props
import SpaCardCarouselProps from "./index.d";

//css
import {
  CarouselMobileWrapper,
  CarouselWrapper,
  TitleWrapper,
  Wrapper,
} from "./index.styles";

/**
 * CardCarousel component
 * @returns {JSX.Element} - A carousel component that displays a list of cards.
 */
const CardCarousel = ({ title, spaDetails }: SpaCardCarouselProps) => {
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
      <TitleWrapper>{title ?? "New to Spwan"}</TitleWrapper>
      <CarouselWrapper>
        <div ref={sliderRef} className="keen-slider">
          {spaDetails &&
            spaDetails.map((spa) => (
              <div
                id="spaCarousel"
                className="keen-slider__slide"
                key={spa.title}
              >
                <SpaCard
                  title={spa.title}
                  description={spa.description}
                  ratting={spa.ratting}
                  numReviews={spa.numReviews}
                  img={spa.img}
                  alt={spa.alt}
                />
              </div>
            ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Icon
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              className={`arrow left-arrow ${
                currentSlide === 0 && "arrow--disabled"
              }`}
              width={48}
              height={48}
              src={Icons.LeftArrow}
            />
            <Icon
              className={`arrow right-arrow ${
                currentSlide ===
                  instanceRef.current.track.details.slides.length - 1 &&
                "arrow--disabled"
              }`}
              width={48}
              height={48}
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              src={Icons.RightArrow}
            />
          </>
        )}
      </CarouselWrapper>
      <CarouselMobileWrapper>
        {spaDetails &&
          spaDetails.map((spa, id) => (
            <SpaCard
              title={spa.title}
              description={spa.description}
              ratting={spa.ratting}
              numReviews={spa.numReviews}
              img={spa.img}
              alt={spa.alt}
              key={spa.title + id}
            />
          ))}
      </CarouselMobileWrapper>
    </Wrapper>
  );
};

export default CardCarousel;
