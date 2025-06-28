const NavModal = ({ title, onClick }) => {
  return (
    <div
      className=" bg-tertiary hover:bg-secondary cursor-pointer px-4 rounded-xl py-2 transition-colors duration-200 ease-in-out"
      onClick={onClick}
    >
      {/* // <div className="bg-tertiary hover:bg-secondary py-3 cursor-pointer"> */}
      <p className="text-dark hover:text-white flex gap-2 items-center">
        {title}
        <i className="fa fa-caret-down text-sm"></i>
      </p>
    </div>
  );
};
export default NavModal;
