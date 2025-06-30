import React, { useState, useEffect } from "react";
import mobileImg from "../../assets/imgs/mobile.webp";
import mobileImg3 from "../../assets/imgs/dry_fruit.webp";
import mobileImg4 from "../../assets/imgs/grocery.webp";

const HeroSlider = () => {
  const images = [mobileImg, mobileImg3, mobileImg4];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Clean up
  }, []);

  return (
    <div className="container">
      <p className="relative text-center">
        <i
          className="fa fa-arrow-left text-light bg-transparent hover:bg-blue-500 rounded-full border p-4 absolute left-0 top-60 transform -translate-y-1/2 cursor-pointer"
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + images.length) % images.length)
          }
        ></i>
      </p>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-auto object-cover rounded-lg"
      />
      <p className="relative text-center">
        <i
          className="fa fa-arrow-right text-light bg-transparent hover:bg-blue-500 rounded-full border p-4 absolute -top-65 right-0 transform  cursor-pointer"
          onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        ></i>
      </p>
    </div>
  );
};

export default HeroSlider;
