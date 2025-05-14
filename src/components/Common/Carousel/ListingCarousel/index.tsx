"use client";
import { Fragment, useState } from "react";

import ListingCard from "../../Cards/ListingCard";
import Icon from "../../Icon";
import Icons from "@/Icons";

//props
import ListingCarouselProps from "./index.d";

//css
import {
  ListingCarouselWrapper,
  ListingWrapperMb,
  PageNumber,
  PageNumberWrapper,
  PaginationWrapper,
  WrapperMb,
} from "./index.styles";

/**
 * ListingCarousel Component
 * @param {Object} props - Component props
 * @param {Array} props.spaList - Array of spa objects to display. Each object should contain:
 * @param {string} props.spaList[].title - Title of the spa
 * @param {string} props.spaList[].description - Description of the spa
 * @param {string} props.spaList[].imgSrc - Image source URL or path
 * @param {string} props.spaList[].imgAlt - Image alt text
 * @param {number} props.spaList[].rating - Rating value
 * @param {boolean} props.spaList[].saved - Saved state (e.g., for favorite/bookmark)
 * @param {number} props.spaList[].reviews - Number of reviews
 * @param {string} props.spaList[].discount - Discount string (e.g., "22% Off")
 * @returns {JSX.Element} A paginated carousel of ListingCards with custom pagination UI
 */
const ListingCarousel = ({ spaList }: ListingCarouselProps) => {
  const cardsPerPage = 6;
  const totalCards = spaList.length; // You can make this dynamic later
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const pageWindowSize = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const paginatedList = spaList.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const getPageNumbers = () => {
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + pageWindowSize - 1);

    // If we’re near the end, adjust the start
    if (end - start < pageWindowSize - 1) {
      start = Math.max(1, end - pageWindowSize + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <>
      <ListingCarouselWrapper>
        {paginatedList &&
          paginatedList.map((spa, id) => (
            <ListingCard
              key={spa.title + id}
              title={spa.title}
              description={spa.description}
              imgSrc={spa.imgSrc}
              imgAlt={spa.imgAlt}
              rating={spa.rating}
              saved={spa.saved}
              reviews={spa.reviews}
              discount={spa.discount}
            />
          ))}
      </ListingCarouselWrapper>
      {totalPages > 1 && (
        <PaginationWrapper>
          {currentPage !== 1 && (
            <Icon
              src={Icons.LeftArrow}
              alt="left arrow"
              width={36}
              height={36}
              onClick={handlePrev}
            />
          )}
          <PageNumberWrapper>
            {getPageNumbers().map((num) => (
              <PageNumber
                key={num}
                onClick={() => setCurrentPage(num)}
                isActive={num === currentPage}>
                {num}
              </PageNumber>
            ))}
          </PageNumberWrapper>
          {currentPage !== totalPages && (
            <Icon
              src={Icons.RightArrow}
              onClick={handleNext}
              alt="right Arrow"
              width={36}
              height={36}
            />
          )}
        </PaginationWrapper>
      )}
      <WrapperMb>
        <ListingWrapperMb>
          <Fragment>
            {spaList &&
              spaList.map((spa, id) => (
                <ListingCard
                  title={spa.title + id}
                  description={spa.description}
                  imgSrc={spa.imgSrc}
                  imgAlt={spa.imgAlt}
                  rating={spa.rating}
                  saved={spa.saved}
                  reviews={spa.reviews}
                  discount={spa.discount}
                />
              ))}
          </Fragment>
        </ListingWrapperMb>
        <div className="gradient" />
        <Icon src={Icons.DownBlackCircleArrow} alt="downArrow" />
      </WrapperMb>
    </>
  );
};

export default ListingCarousel;
