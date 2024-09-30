"use client";
import {
  Container,
  PaginationContainer,
  Pagination,
  PageNumber,
  Arrow,
  MapContainer,
  ContentContainer,
  ResultTitle,
  ButtonWrapper,
  ButtonContianer,
} from "./styles";
import { useState } from "react";
import { LoadScript } from "@react-google-maps/api";
import { urlFor } from "../../../sanity.js";
import Map from "../map";
import Card from "../card";
import { useResponsive } from "../../hooks/useResponsive.js";
import { ITEMS_PER_PAGE_DESKTOP, ITEMS_PER_PAGE_TABLET } from "./constants";
import Header from "../header";
import Categories from "../categories";
import Modal from "../modal";
import { MapIcon, ArrowDown, ChevronRight, ChevronLeft } from "../icons";

const Content = ({ locations }) => {
  const screenSize = useResponsive();
  const [hoveredMarkerIndex, setHoveredMarkerIndex] = useState(null);
  const [pointMarker, setPointMarker] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsToShow, setItemsToShow] = useState(ITEMS_PER_PAGE_TABLET);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const itemsPerpage =
    screenSize === "desktop" ? ITEMS_PER_PAGE_DESKTOP : ITEMS_PER_PAGE_TABLET;
  const indexOfLastItem = currentPage * itemsPerpage;
  const indexOfFirstItem = indexOfLastItem - itemsPerpage;
  const currentItems = locations.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(locations.length / itemsPerpage);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;

    if (totalPages <= maxPageButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, "...", currentPage, "...", totalPages);
      }
    }

    return pageNumbers;
  };

  const handlePageClick = (page) => {
    if (page === "...") return;
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const mouseOverHandler = (index) => {
    if (index !== null) {
      setHoveredMarkerIndex(index);
      setPointMarker(index);
    } else {
      setHoveredMarkerIndex(index);
    }
  };

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + ITEMS_PER_PAGE_TABLET);
  };

  const toggleMap = () => {
    setIsOpenModal((pre) => !pre);
  };

  return (
    <ContentContainer>
      <Header />
      <Categories />
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <ResultTitle> {currentItems.length} results </ResultTitle>
        <Container>
          <PaginationContainer>
            {screenSize === "mobile"
              ? locations
                  .slice(0, itemsToShow)
                  .map((item, index) => (
                    <Card
                      key={index}
                      src={item.mainImage ? urlFor(item.mainImage).url() : ""}
                      title={item.title}
                      location={item.location}
                      onMouseOver={() => mouseOverHandler(index)}
                      onMouseOut={() => mouseOverHandler(null)}
                    />
                  ))
              : currentItems.map((item, index) => (
                  <Card
                    key={index}
                    src={item.mainImage ? urlFor(item.mainImage).url() : ""}
                    title={item.title}
                    location={item.location}
                    onMouseOver={() => mouseOverHandler(index)}
                    onMouseOut={() => mouseOverHandler(null)}
                  />
                ))}
          </PaginationContainer>
          {screenSize !== "mobile" && (
            <MapContainer>
              <Map
                locations={locations}
                hoveredMarkerIndex={hoveredMarkerIndex}
                pointMarker={pointMarker}
                mouseOverHandler={mouseOverHandler}
              />
            </MapContainer>
          )}
        </Container>
        {screenSize === "mobile" ? (
          <ButtonWrapper>
            <ButtonContianer variant="default" onClick={toggleMap}>
              See Map
              <MapIcon />
            </ButtonContianer>
            <ButtonContianer variant="outlined" onClick={handleLoadMore}>
              Load More
              <ArrowDown />
            </ButtonContianer>
          </ButtonWrapper>
        ) : (
          <Pagination>
            <Arrow onClick={handlePrevPage} disabled={currentPage === 1}>
              <ChevronLeft />
            </Arrow>
            {getPageNumbers().map((number, index) => (
              <PageNumber
                key={index}
                onClick={() => handlePageClick(number)}
                active={currentPage === number ? 1 : 0}
                disabled={number === "..."}
              >
                {number}
              </PageNumber>
            ))}

            <Arrow
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <ChevronRight />
            </Arrow>
          </Pagination>
        )}
        <Modal isVisible={isOpenModal} onClose={toggleMap}>
          <Map
            locations={locations}
            hoveredMarkerIndex={hoveredMarkerIndex}
            pointMarker={pointMarker}
            mouseOverHandler={mouseOverHandler}
          />
        </Modal>
      </LoadScript>
    </ContentContainer>
  );
};

export default Content;
