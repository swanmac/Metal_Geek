import React, { useState, useEffect } from "react";
import { config } from "react-spring";

import { Carousel } from "react-carousel-card-3d";

export default function Carousel3d({
  cards,
  offset,
  autorotation = true,
  rotationInterval = 5000,
}) {
  const table = cards.map((element: any, index: number) => {
    return { ...element, index, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [goToSlide, setGoToSlide] = useState(0);
  const [slides] = useState(table);

  useEffect(() => {
    setOffsetRadius(offset);
  }, [offset]);

  useEffect(() => {
    let interval: NodeJS.Timer | null = null;
    if (autorotation) {
      interval = setInterval(() => {
        setGoToSlide((prevState) =>
          prevState + 1 >= cards.length ? 0 : prevState + 1
        );
      }, rotationInterval);
    }

    return () => {
      if (autorotation && interval) {
        clearInterval(interval);
      }
    };
  }, [cards, autorotation, rotationInterval]);

  return (
    <Carousel
      slides={slides}
      goToSlide={goToSlide}
      offsetRadius={offsetRadius}
      animationConfig={config.gentle}
    />
  );
}
