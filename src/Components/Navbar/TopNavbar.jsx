import IconText from "./Icontext";

const TopNavbar = () => {
  return (
    <div className="w-full bg-primary py-2">
      <div className="container text-dark flex flex-col gap-3 lg:flex-row lg:gap-0 justify-between">
        <div>
          <p className="sm:text-sm md:text-lg lg:text-lg xl:text-xl">
            Welcome to worldwide Megamart!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-7 sm:text-sm md:text-lg lg:text-lg xl:text-xl">
          <IconText
            className="text-secondary fa-location-dot"
            text="Deliever to 241542"
          />{" "}
          <span className="hidden sm:flex items-center opacity-20">|</span>
          <IconText
            className="text-secondary fa-truck"
            text="Track your order"
          />
          <span className="hidden sm:flex items-center opacity-20">|</span>
          <IconText
            className="text-secondary fa-circle-dot"
            text="All offers"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
