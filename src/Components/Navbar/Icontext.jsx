import React from "react";

const IconText = ({ className, text }) => {
  return (
    <div className="flex items-center gap-2">
      <i className={`fas ${className}`}></i>
      <span className="text-dark dark:text-primary">{text}</span>
    </div>
  );
};

export default IconText;
