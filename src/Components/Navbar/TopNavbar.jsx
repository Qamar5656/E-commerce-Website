import IconText from "./Icontext";

const TopNavbar = () => {
  return (
    <div className="w-full bg-primary dark:bg-dark text-dark dark:text-primary py-2">
      <div className="container dark:text-light flex flex-col gap-3 lg:flex-row lg:gap-0 justify-between">
        {/* Welcome text */}
        <div>
          <p className="sm:text-sm md:text-lg lg:text-lg xl:text-xl">
            Welcome to worldwide Megamart!
          </p>
        </div>

        {/* Right side links */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-7 sm:text-sm md:text-lg lg:text-lg xl:text-xl">
          <IconText
            className="text-secondary dark:text-secondary hover:text-tertiary fa-location-dot"
            text="Deliver to 241542"
          />
          <span className="hidden sm:flex items-center text-primary dark:text-tertiary opacity-50">
            |
          </span>
          <IconText
            className="text-secondary dark:text-secondary hover:text-tertiary dark:hover:text-tertiary fa-truck"
            text="Track your order"
          />
          <span className="hidden sm:flex items-center text-primary dark:text-tertiary opacity-50">
            |
          </span>
          <IconText
            className="text-secondary dark:text-secondary hover:text-tertiary fa-circle-dot"
            text="All offers"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
