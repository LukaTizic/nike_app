"use client";

import Image from "next/image";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl bg-primary ${
        bigShoeImg === imgURL.bigShoe
          ? "border-red-500 shadow-2xl bg-[#DBDEFF]	"
          : " border-gray-slate shadow-md "
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <Image
          src={imgURL.thumbnail}
          alt='shoe collection'
          width={127}
          height={103}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCard;
