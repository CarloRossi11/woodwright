"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./imageShuffle.module.css";

interface ImageShuffleProps {
  images: { src: string; alt: string }[];
}

export default function ImageShuffle({ images }: ImageShuffleProps) {
  const [order, setOrder] = useState(images.map((_, i) => i)); 
  // order = indices of images in current stack order

  const bringToBack = (index: number) => {
    if (index !== order[0]) return; // only let top image be clickable
    const newOrder = [...order.slice(1), order[0]]; // move first to end
    setOrder(newOrder);
  };

  return (
    <div className={styles.container}>
      {order.map((imgIndex, i) => {
        const img = images[imgIndex];
        const isTop = i === 0;

        return (
          <div
            key={imgIndex}
            className={`${styles.imageWrapper} ${isTop ? styles.top : ""}`}
            style={{
              zIndex: images.length - i,
              top: `${i * 12}px`,   // stagger vertically
              left: `${i * 12}px`,  // stagger horizontally
              transform: `scale(${1 - i * 0.03}) rotate(${i % 2 === 0 ? -2 : 2}deg)`,
            }}
            onClick={() => bringToBack(order[i])}
          >
            <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} />
          </div>
        );
      })}
    </div>
  );
}
