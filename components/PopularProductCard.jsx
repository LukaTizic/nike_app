import React from "react";
import Image from "next/image";
import { star } from "@/assets/icons";

const PopularProductCard = ({ imgURL, name, price, url }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <a href={url} target='_blank'>
        <Image
          className='bg-[#c0c3dd] rounded-lg shadow-md shadow-[#c0c3dd] hover:shadow-xl hover:border-2 hover:border-red-500 hover:z-20 hover:scale-110'
          src={imgURL}
          alt={name}
          width={280}
          height={280}
        />
      </a>
      <div className='mt-8 flex justify-start gap-5'>
        <Image src={star} alt='rating' width={24} height={24} />
        <h2 className='font-palanquin font-semibold text-2xl leading-normal'>
          {name}
        </h2>
      </div>
      <p className='mt-2 font-semibold font-montserrat text-red-500 text-xl leading-normal  '>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
