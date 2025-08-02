import React from "react";
import img from "../../assets/imgs/download (4).jpg";
import ImageGallery from "../Grocery Items Detail page/ImageGallery";
import ImageGalleryInformation from "../Grocery Items Detail page/ImageGalleryInformation";
import SellerDetails from "../Grocery Items Detail page/SellerDetails";
import TitleBar from "../Grocery Items Description/TitleBar";

const Detailspage = () => {
  return (
    <>
      <div className="py-14">
        <div
          className="container mx-auto flex flex-col lg:flex-row gap-8 border border-gray-300 rounded-lg p-6"
          style={{ padding: "13px 20px" }}
        >
          <div className="lg:w-1/3">
            <ImageGallery />
          </div>
          <div className="lg:w-1/3">
            <ImageGalleryInformation
              title="Blue T-shirt"
              rating="5"
              reviews="32"
              sold="120 items sold"
            />
          </div>
          <div className="lg:w-1/3">
            <SellerDetails />
          </div>
        </div>

        <section className="container mx-auto mt-8">
          <TitleBar />
        </section>
      </div>
    </>
  );
};

export default Detailspage;
