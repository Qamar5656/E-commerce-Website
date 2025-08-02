import { FiHeart } from "react-icons/fi"; // Feather Icon - outlined heart

const SellerDetails = () => {
  return (
    <>
      <div className="w-full p-4 border border-gray-300 rounded-lg shadow-sm mt-5 md:mt-0">
        <h3 className="font-semibold text-lg">Supplier</h3>
        <p className="text-sm text-gray-600">Guanjoi Trading LLC</p>
        <div className="pr-20">
          <div className="flex items-center gap-2 mt-2">
            <img src="germany-flag.png" className="w-5 h-5" alt="Germany" />
            <span className="">Germany, Berlin</span>
          </div>
          <div className="flex flex-col gap-1 text-gray-700 mt-2">
            <span>✅ Verified Seller</span>
            <span>🌐 Worldwide shipping</span>
          </div>
        </div>
        <div className="flex flex-col">
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md mt-4 py-2 px-4 cursor-pointer">
            Send inquiry
          </button>
          <button className="text-blue-600 mt-2  border rounded-md font-bold p-2 cursor-pointer">
            Seller's profile
          </button>
        </div>
      </div>
      <button className="mt-3 text-blue-500 flex items-center gap-2 font-bold hover:underline">
        <FiHeart className="w-5 h-5" />
        Save for later
      </button>
    </>
  );
};
export default SellerDetails;
