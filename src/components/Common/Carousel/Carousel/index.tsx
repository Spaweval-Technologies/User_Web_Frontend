import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Icons from "@/Icons";
import Icon from "../../Icon";

//props
import CarouselProps from "./index.d";

//css
import { CarouselWrapper } from "./index.styles";

/**
 * Carousel Component using Keen Slider.
 * This component renders a scrollable carousel with navigation arrows, built using `keen-slider`.
 * It supports looping, spacing between slides, and tracks the current slide index.
 * @param {object} props - The props object.
 * @param {React.ReactNode} props.children - The content (slides) to render inside the carousel.
 * @param {string} [props.id] - Optional ID to assign to the carousel container for accessibility or targeting.
 * @returns {JSX.Element} The rendered carousel component with navigation arrows.
 */
const Carousel = ({ children, id }: CarouselProps) => {
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
    <CarouselWrapper>
      <div id={id ?? "Carousel"} ref={sliderRef} className="keen-slider">
        {children}
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
  );
};

export default Carousel;
