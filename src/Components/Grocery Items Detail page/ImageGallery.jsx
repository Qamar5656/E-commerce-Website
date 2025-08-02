import { useState } from "react";
import img from "../../assets/imgs/download (4).jpg";
import img2 from "../../assets/imgs/download (3).jpg";
import img3 from "../../assets/imgs/images.jpg";
import img4 from "../../assets/imgs/download (1).jpg";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(img);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const images = [img, img2, img3, img4];

  return (
    <div className="w-[300px]">
      {/* Main Display Image */}
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-auto object-cover p-4"
        />
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-4 gap-3 mt-4">
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`Thumbnail ${idx + 1}`}
            className={`h-20 w-20 object-cover rounded-md cursor-pointer transition-all duration-300
              ${
                selectedImage === image
                  ? "border-4 border-blue-500"
                  : "border border-gray-300"
              }`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
