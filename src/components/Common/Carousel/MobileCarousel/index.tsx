import { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";

import Icons from "@/Icons";
import Icon from "../../Icon";

//props
import MobileCarouselProps from "./index.d";

//css
import { CarouselWrapper } from "./index.styles";
import "keen-slider/keen-slider.min.css";

/**
 * MobileCarousel component
 * @returns {JSX.Element} - A carousel component that displays a list of category cards.
 */
const MobileCarousel = ({ children }: MobileCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const keenSliderRef = useRef<HTMLDivElement>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: false,
    rubberband: true,
    vertical: true,
    slides: {
      perView: 1,
      spacing: 29,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    const container = containerRef.current;
    const keenSlider = keenSliderRef.current;
    if (!container || !keenSlider || !instanceRef.current) return;

    const lastSlideIndex = instanceRef.current.track.details.slides.length - 1;

    const handleWheel = (e: WheelEvent) => {
      const isOnLastSlide = currentSlide === lastSlideIndex;
      const isScrolledToBottom =
        keenSlider.scrollTop + keenSlider.clientHeight >=
        keenSlider.scrollHeight;

      if (isOnLastSlide && isScrolledToBottom && e.deltaY > 0) {
        e.preventDefault();
        // Allow page to scroll by moving focus out
        container.blur();
        window.scrollTo({ top: window.scrollY + 100, behavior: "smooth" });
      }
    };

    keenSlider.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      keenSlider.removeEventListener("wheel", handleWheel);
    };
  }, [currentSlide]);

  return (
    <CarouselWrapper ref={containerRef}>
      <div
        ref={(ref) => {
          keenSliderRef.current = ref;
          sliderRef(ref);
        }}
        className="keen-slider">
        {children}
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
            src={Icons.DownBlackCircleArrow}
          />
        </>
      )}
    </CarouselWrapper>
  );
};

export default MobileCarousel;
