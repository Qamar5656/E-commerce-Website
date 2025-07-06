const MobileCard = ({ data }) => {
  let num = Math.floor(Math.random() * (100 - 30 + 1)) + 30;

  if (!data) return null;
  return (
    <div className="">
      <div className="container relative py-5 rounded-lg shadow-md">
        <img
          src={data.image || "/src/assets/imgs/mobile.webp"}
          alt={data.model_name || "Model"}
          className="w-full h-40 object-cover rounded-lg shadow-md"
        />
        <div className="absolute top-0 right-0 bg-secondary text-light rounded-tr-2xl rounded-bl-2xl p-2">
          <p className="">{num}%</p>
          <span>OFF</span>
        </div>
      </div>
      <div className="flex flex-col px-3 pb-2 bg-white">
        <h1 className="text-lg font-semibold">{data.model_name}</h1>
        <p className="text-gray-600">{data.price}</p>
        <p className="text-gray-500 text-sm">{data.description}</p>
      </div>
    </div>
  );
};

export default MobileCard;
