// components/Carousel.tsx
"use client"; // needed if you're on Next.js 13+ App Router

import React, { useState, useEffect, useRef } from "react";
import styles from "./carousel.module.css";

interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlay = true,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();

    if (autoPlay) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, autoPlayInterval);
    }

    return () => {
      resetTimeout();
    };
  }, [currentIndex, autoPlay, autoPlayInterval, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${
              index === currentIndex ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      <button
        className={`${styles.control} ${styles.prev}`}
        onClick={prevSlide}
      >
        ‹
      </button>
      <button
        className={`${styles.control} ${styles.next}`}
        onClick={nextSlide}
      >
        ›
      </button>
      <div className={styles.dots}>
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.dot} ${
              idx === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
