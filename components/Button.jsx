import "../app/globals.css";
import Image from "next/image";

const Button = ({ label, iconURL }) => {
  return (
    <button
      type='button'
      class=' flex text-red-700 hover:text-white border border-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2   '
    >
      {label}
      <Image
        src={iconURL}
        alt='arrow right icon'
        className='ml-2 rounded-full w-5 h-5  '
      />
    </button>
  );
};

export default Button;
