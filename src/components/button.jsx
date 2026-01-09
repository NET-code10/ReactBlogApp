import React from "react";

const Button = ({ content, className, ClickAction }) => {
  return (
    <>
      <button
        onClick={ ClickAction}
        className={` px-7 py-3 rounded text-white bg-blue-700 ${className}`}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
