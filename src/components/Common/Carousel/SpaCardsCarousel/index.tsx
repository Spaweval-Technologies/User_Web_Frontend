import SpaCard from "../../Cards/SpaCard";

//props
import SpaCardCarouselProps from "./index.d";

//css
import { CarouselMobileWrapper, TitleWrapper, Wrapper } from "./index.styles";
import Carousel from "../Carousel";

/**
 * CardCarousel component
 * @returns {JSX.Element} - A carousel component that displays a list of cards.
 */
const CardCarousel = ({ title, spaDetails }: SpaCardCarouselProps) => {
  return (
    <Wrapper>
      <TitleWrapper>{title ?? "New to Spwan"}</TitleWrapper>
      <Carousel id="spaCarousel">
        {spaDetails &&
          spaDetails.map((spa) => (
            <div className="keen-slider__slide" key={spa.title}>
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
      </Carousel>
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
