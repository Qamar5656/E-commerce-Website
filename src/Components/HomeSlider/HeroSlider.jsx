import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import img1 from "../../assets/imgs/mobile.webp";
import img2 from "../../assets/imgs/dry_fruit.webp";
import img3 from "../../assets/imgs/grocery.webp";

const HeroSlider = () => {
  const images = [img1, img2, img3];

  return (
    <div className="container">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        loop
        className="rounded-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
