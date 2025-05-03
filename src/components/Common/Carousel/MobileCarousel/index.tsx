import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";

import categories from "@/components/Categories/data";
import Icons from "@/Icons";

import CategoryCard from "../../Cards/CategoryCard";
import Icon from "../../Icon";

//css
import { CarouselWrapper } from "./index.styles";
import "keen-slider/keen-slider.min.css";

/**
 * MobileCarousel component
 * @returns {JSX.Element} - A carousel component that displays a list of category cards.
 */
const MobileCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: false,
      rubberband: false,
      vertical: true,
      slides: {
        perView: 1.8,
        spacing: 29,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
  );

  return (
    <CarouselWrapper>
      <div ref={sliderRef} className="keen-slider">
        {categories &&
          categories.map((category) => (
            <div className="keen-slider__slide" key={category.title}>
              <CategoryCard
                title={category.title}
                description={category.description}
                color={category.color}
                img={category.img}
                alt={category.alt}
                key={category.title}
              />
            </div>
          ))}
      </div>
      <div className="gradient" />
      {loaded && instanceRef.current && (
        <>
          <Icon
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            className={`arrow top-arrow ${
              currentSlide === 0 && "arrow--disabled"
            }`}
            width={48}
            height={48}
            src={Icons.LeftArrow}
          />
          <Icon
            className={`arrow bottom-arrow ${
              currentSlide ===
                instanceRef.current.track.details.slides.length - 1 &&
              "arrow--disabled"
            }`}
            width={48}
            height={48}
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            src={Icons.DownArrowCircle}
          />
        </>
      )}
    </CarouselWrapper>
  );
};

export default MobileCarousel;
