"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/slider1.png",
  "/images/slider2.png",
  "/images/slider3.png",
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
      {" "}
      {images.map((src, index) => (
        <Image
          key={src}
          src={src || "/placeholder.svg"}
          alt={`Slider image ${index + 1}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
