import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { CardsCarousel } from "./index.styles";
import Icon from "../../Icon";
import Icons from "@/Icons";
import CarouselProps from "../Carousel/index.d";

const CardsImgCarousel = ({ children, id }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 0,
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
    <CardsCarousel>
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
            width={21}
            height={21}
            src={Icons.WhiteLeftArrow}
          />
          <Icon
            className={`arrow right-arrow`}
            width={21}
            height={21}
            onClick={(e: any) => {
              e.stopPropagation();
              if (loaded && instanceRef.current) {
                instanceRef.current.next();
              }
            }}
            src={Icons.WhiteRightArrow}
          />
        </>
      )}
    </CardsCarousel>
  );
};

export default CardsImgCarousel;
