import React from "react";
import "../app/globals.css";

const Button = () => {
  return (
    <button
      type='button'
      class='text-red-700 hover:text-white border border-red-500 hover:bg-red-600   font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2   '
    >
      Click me
    </button>
  );
};

export default Button;
