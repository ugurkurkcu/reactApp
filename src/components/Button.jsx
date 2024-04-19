import React from "react";

const Button = ({ onClick, btnText }) => {
  return (
    <button
      onClick={() => onClick()}
      className="w-full mt-3 bg-purple-500 py-1 rounded-lg text-white"
    >
      {btnText}
    </button>
  );
};

export default Button;
