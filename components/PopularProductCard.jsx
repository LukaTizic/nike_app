import React from "react";
import Image from "next/image";
import { star } from "@/assets/icons";

const PopularProductCard = ({ imgURL, name, price, url }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <a href={url} target='_blank'>
        <Image
          className='hover:shadow-xl hover:border-2 hover:rounded-full '
          src={imgURL}
          alt={name}
          width={280}
          height={280}
        />
      </a>
      <div className='mt-8 flex justify-start gap-5'>
        <Image src={star} alt='rating' width={24} height={24} />
        <p className='font-montserrat text-xl'>{name}</p>
      </div>
    </div>
  );
};

export default PopularProductCard;
