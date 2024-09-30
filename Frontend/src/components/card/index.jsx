"use client";
import { useState, useEffect } from "react";
import {
  Container,
  Title,
  Text,
  Location,
  ImageWrapper,
  FooterWapper,
  SkeletonWrapper,
  SkeletonImage,
  SkeletonTitle,
  SkeletonLocation,
  SkeletonFooter,
  MatchTag,
  MatchTitle,
} from "./styles";
import { useResponsive } from "../../hooks/useResponsive.js";
import { Arrow, MatchIcon } from "../icons";

const Card = ({ src, title, location, onMouseOver, onMouseOut }) => {
  const [city, setCity] = useState();
  const screenSize = useResponsive();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCityName = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.lat}&lon=${location.lng}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch city name");
        }
        const data = await response.json();
        const cityName = `${data.address?.state || ""},${data.address?.country_code || ""}`;
        setCity(cityName);
      } finally {
        setLoading(false);
      }
    };

    fetchCityName();
  }, [location.lat, location.lng]);

  if (loading) {
    return (
      <SkeletonWrapper>
        <SkeletonImage />
        <div>
          <SkeletonTitle />
          <SkeletonLocation />
        </div>
        <SkeletonFooter />
      </SkeletonWrapper>
    );
  }

  return (
    <Container onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <ImageWrapper>
        <img
          src={src}
          alt=""
          width={screenSize === "mobile" ? "100%" : "281px"}
          height={screenSize === "desktop" ? 229 : 150}
        />
        <MatchTag>
          {" "}
          <MatchIcon fill="black" size={16} />{" "}
          <MatchTitle>80% Match</MatchTitle>
        </MatchTag>
      </ImageWrapper>
      <div>
        <Title>{title}</Title>
        <Location>{city}</Location>
      </div>
      <FooterWapper>
        <Text>Discover </Text>

        <Arrow />
      </FooterWapper>
    </Container>
  );
};

export default Card;
