"use client";
import { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  MarkerClusterer,
} from "@react-google-maps/api";
import {
  ZoomControls,
  ZoomButtons,
  Picture,
  LinkWrapper,
  Title,
  Svg,
} from "./styles";
import { urlFor } from "../../../sanity.js";
import { clusterStyles, mapOptions } from "./constants";
import { Link } from "../icons";
import { useResponsive } from "../../hooks/useResponsive.js";

const Map = ({
  locations,
  hoveredMarkerIndex,
  pointMarker,
  mouseOverHandler,
}) => {
  const [zoom, setZoom] = useState(4);
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(null);
  const mapRef = useRef(null);
  const screesize = useResponsive();

  const center = {
    lat: locations[pointMarker]?.location.lat || 36.011955,
    lng: locations[pointMarker]?.location.lng || -113.810951,
  };

  const mapContainerStyle = {
    width: "100%",
    height: `${screesize === "mobile" ? "100%" : "750px"}`,
    borderRadius: "12px",
  };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.panTo(center);
    }
  }, [center]);

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 1, 21));
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 1, 3));
  };

  const handleMarkerClick = (index) => {
    setSelectedMarkerIndex(index);
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={zoom}
      center={center}
      options={mapOptions}
      onLoad={(map) => (mapRef.current = map)}
    >
      <MarkerClusterer
        options={{
          styles: clusterStyles,
        }}
      >
        {(clusterer) =>
          locations.map((item, index) => (
            <Marker
              key={index}
              position={{ lat: item.location.lat, lng: item.location.lng }}
              onClick={() => handleMarkerClick(index)}
              onMouseOver={() => mouseOverHandler(index)}
              onMouseOut={() => mouseOverHandler(null)}
              clusterer={clusterer}
              icon={{
                url:
                  "data:image/svg+xml;charset=utf-8," +
                  encodeURIComponent(
                    `<svg xmlns="http://www.w3.org/2000/svg" width="${
                      hoveredMarkerIndex === index ? 50 : 40
                    }" height="${
                      hoveredMarkerIndex === index ? 50 : 40
                    }" viewBox="0 0 40 40" fill="none">
                        <rect x="4.5" y="4.5" width="31" height="31" rx="15.5" fill="${
                          selectedMarkerIndex === index
                            ? "#000000"
                            : hoveredMarkerIndex === index
                              ? "#721931"
                              : "#F77E2D"
                        }"/>
                        <rect x="4.5" y="4.5" width="31" height="31" rx="15.5" stroke="${
                          selectedMarkerIndex === index
                            ? "#000000"
                            : hoveredMarkerIndex === index
                              ? "#721931"
                              : "#F77E2D"
                        }"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0004 13C23.0004 11.8954 23.8958 11 25.0004 11C26.105 11 27.0004 11.8954 27.0004 13C27.0004 14.1046 26.105 15 25.0004 15C23.8958 15 23.0004 14.1046 23.0004 13ZM21.3754 15.2191C21.8007 14.8789 22.4118 14.9448 22.7574 15.3466L22.8322 15.4453L24.5351 18H27.0001C27.513 18 27.9356 18.386 27.9934 18.8834L28.0001 19C28.0001 19.5128 27.6141 19.9355 27.1168 19.9933L27.0001 20H24.0001C23.7076 20 23.432 19.8721 23.2434 19.6537L23.1681 19.5547L21.7721 17.462L18.4971 20.082L20.7072 22.2929C20.8635 22.4492 20.9627 22.6519 20.9915 22.8686L21.0001 23V27C21.0001 27.5523 20.5524 28 20.0001 28C19.4873 28 19.0646 27.614 19.0069 27.1166L19.0001 27V23.415L16.293 20.7071C15.9017 20.3158 15.9069 19.6892 16.2823 19.3036L16.3754 19.2191L21.3754 15.2191ZM13.0002 22C10.7911 22 9.00024 23.7909 9.00024 26C9.00024 28.2091 10.7911 30 13.0002 30C15.2094 30 17.0002 28.2091 17.0002 26C17.0002 23.7909 15.2094 22 13.0002 22ZM13.0001 24C14.1046 24 15.0001 24.8954 15.0001 26C15.0001 27.1046 14.1046 28 13.0001 28C11.8955 28 11.0001 27.1046 11.0001 26C11.0001 24.8954 11.8955 24 13.0001 24ZM27.0004 22C24.7913 22 23.0004 23.7909 23.0004 26C23.0004 28.2091 24.7913 30 27.0004 30C29.2095 30 31.0004 28.2091 31.0004 26C31.0004 23.7909 29.2095 22 27.0004 22ZM27.0004 24C28.1049 24 29.0004 24.8954 29.0004 26C29.0004 27.1046 28.1049 28 27.0004 28C25.8958 28 25.0004 27.1046 25.0004 26C25.0004 24.8954 25.8958 24 27.0004 24Z" fill="white"/>
                      </svg>`
                  ),
                scaledSize: {
                  width:
                    hoveredMarkerIndex === index ||
                    selectedMarkerIndex === index
                      ? 70
                      : 40,
                  height:
                    hoveredMarkerIndex === index ||
                    selectedMarkerIndex === index
                      ? 70
                      : 40,
                },
              }}
            />
          ))
        }
      </MarkerClusterer>

      {selectedMarkerIndex !== null && (
        <InfoWindow
          position={{
            lat: locations[selectedMarkerIndex].location.lat,
            lng: locations[selectedMarkerIndex].location.lng,
          }}
          onCloseClick={() => handleMarkerClick(null)}
        >
          <>
            <Picture
              src={urlFor(locations[selectedMarkerIndex].mainImage).url()}
              alt={""}
            />
            <LinkWrapper>
              <Svg>
                <Link />
              </Svg>
              <Title>{locations[selectedMarkerIndex].title} </Title>
            </LinkWrapper>
          </>
        </InfoWindow>
      )}
      <ZoomControls>
        <ZoomButtons onClick={handleZoomIn}>+</ZoomButtons>
        <ZoomButtons onClick={handleZoomOut}>-</ZoomButtons>
      </ZoomControls>
    </GoogleMap>
  );
};

export default Map;
