import { FaStar } from "react-icons/fa";

const ImageGalleryInformation = ({ title, rating, reviews, sold }) => {
  return (
    <div className="w-full px-6">
      {/* Stock & Title */}
      <p className="text-green-600 text-sm font-medium mb-2">In stock</p>
      <h1 className="text-xl font-semibold text-gray-800 mb-2">
        {title || "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle"}
      </h1>

      {/* Star Rating */}
      <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
        <div className="flex items-center text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-800 ml-1">9.3</span>
        </div>
        <span className="text-gray-400 text-sm">|</span>
        <span className="underline cursor-pointer">32 reviews</span>
        <span className="text-gray-400 text-sm">|</span>
        <span>{sold || "154 sold"}</span>
      </div>

      {/* Price Table */}
      <div className="bg-orange-50 p-4 rounded-md my-4 grid grid-cols-3 text-center font-semibold text-gray-800">
        <div>
          <p className="text-red-600 text-lg">$98.00</p>
          <p className="text-xs font-normal text-gray-500">50–100 pcs</p>
        </div>
        <div>
          <p>$90.00</p>
          <p className="text-xs font-normal text-gray-500">100–700 pcs</p>
        </div>
        <div>
          <p>$78.00</p>
          <p className="text-xs font-normal text-gray-500">700+ pcs</p>
        </div>
      </div>

      {/* Other Details */}
      <div className="text-sm text-gray-700 space-y-2">
        <div className="flex">
          <p className="w-32 text-gray-500">Price:</p>
          <p>Negotiable</p>
        </div>
        <span className="text-gray-500">
          <hr />
        </span>
        <div className="flex flex-col py-4">
          <div className="flex py-1">
            <p className="w-32 text-gray-500">Type:</p>
            <p>Classical Shoes</p>
          </div>
          <div className="flex py-1">
            <p className="w-32 text-gray-500">Material:</p>
            <p>Plastic material</p>
          </div>
          <div className="flex py-1">
            <p className="w-32 text-gray-500">Design:</p>
            <p>Modern nice</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col py-4">
          <div className="flex py-1">
            <p className="w-32 text-gray-500">Customization:</p>
            <p className="">Customized logo and design custom packages</p>
          </div>
          <div className="flex py-1">
            <p className="w-32 text-gray-500">Protection:</p>
            <p>Refund Policy</p>
          </div>
          <div className="flex py-1">
            <p className="w-32 text-gray-500">Warranty:</p>
            <p>2 years full warranty</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ImageGalleryInformation;
