// components/ImageViewer.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./imageViewer.module.css";

interface ImageViewerProps {
  images: { src: string; alt?: string }[];
  initialIndex?: number;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isLightboxOpen, currentIndex, images.length]);

  const nextImage = () => {
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className={styles.viewerContainer}>
      {/* Main image + nav arrows */}
      <div className={styles.mainImageWrapper}>
        <button
          className={styles.navButton}
          onClick={prevImage}
          aria-label="Previous Image"
        >
          ‹
        </button>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt ?? `Image ${currentIndex + 1}`}
          className={styles.mainImage}
          onClick={() => openLightbox(currentIndex)}
        />
        <button
          className={styles.navButton}
          onClick={nextImage}
          aria-label="Next Image"
        >
          ›
        </button>
      </div>

      {/* Thumbnail strip / pagination */}
      <div className={styles.thumbnailStrip}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt ?? `Thumbnail ${idx + 1}`}
            className={
              idx === currentIndex
                ? `${styles.thumbnail} ${styles.activeThumbnail}`
                : styles.thumbnail
            }
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>

      {/* Lightbox overlay */}
      {isLightboxOpen && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.lightboxNav}
              onClick={prevImage}
              aria-label="Previous in Lightbox"
            >
              ‹
            </button>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt ?? `Image ${currentIndex + 1}`}
              className={styles.lightboxImage}
            />
            <button
              className={styles.lightboxNav}
              onClick={nextImage}
              aria-label="Next in Lightbox"
            >
              ›
            </button>
            <button
              className={styles.lightboxClose}
              onClick={closeLightbox}
              aria-label="Close Lightbox"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;