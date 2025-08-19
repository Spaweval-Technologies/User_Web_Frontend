'use client'; // required in Next.js App Router
import { MutableRefObject, useState } from 'react';
import { useKeenSlider, KeenSliderPlugin, KeenSliderInstance } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css'; // your custom slide styling
import { CarouselWrapper, Wrapper } from './index.styles';
import data from './data';
import Image from 'next/image';

const ThumbnailPlugin = (
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin => {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }

    function addActive(idx: number) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
};

export default function SliderWithThumbnails() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 'auto',
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <Wrapper>
      <CarouselWrapper ref={sliderRef} className="keen-slider">
        {data.map((src, index) => (
          <div key={`${index} spadetail carousel`} className={`keen-slider__slide`}>
            <Image src={src} alt={`spa detail ${index + 1}`} objectFit="cover" />
          </div>
        ))}
      </CarouselWrapper>
      <CarouselWrapper ref={thumbnailRef} className="keen-slider thumbnail">
        {data.map((src, index) => (
          <div key={`thumbnail ${index}`} className={`keen-slider__slide thumbnail-slider`}>
            <Image
              src={src}
              alt={`spa detail ${index + 1}`}
              width={413}
              height={218}
              objectFit="cover"
            />
          </div>
        ))}
      </CarouselWrapper>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            );
          })}
        </div>
      )}
    </Wrapper>
  );
}
