import React from "react";
import img from "../../assets/imgs/download (4).jpg";
import ImageGallery from "../Grocery Items Detail page/ImageGallery";
import ImageGalleryInformation from "../Grocery Items Detail page/ImageGalleryInformation";
import SellerDetails from "../Grocery Items Detail page/SellerDetails";

const Detailspage = () => {
  return (
    <>
      <div className="py-14 flex flex-col">
        <section className="container flex gap-10">
          <div>
            <ImageGallery />
          </div>
          <div>
            <ImageGalleryInformation
              title="Blue T-shirt"
              rating="5"
              reviews="good"
              sold="120 items sold"
            />
          </div>
          <div>
            <SellerDetails />
          </div>
        </section>
        <section className="container">
          <h1 className="py-5">Description</h1>
        </section>
      </div>
    </>
  );
};

export default Detailspage;
