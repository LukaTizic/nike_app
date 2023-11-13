import React from "react";
import { arrowRight } from "@/assets/icons";
import { offer } from "@/assets/images";
import Button from "./Button";
import Image from "next/image";

const SpecialOffer = () => {
  return (
    <section
      className='padding flex justify-wrap items-center max-xl:flex-col-reverse gap-10
  '
    >
      <div className='flex-1'>
        <Image
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-red-500'>NIKE </span>
          Promos & Discounts
        </h2>
        <p className='mt-4 info-text'>
          Explore the latest discounts and promos. Enjoy free shipping on orders
          $50+ as a Nike Member.
        </p>

        <h1 className='mt-5 text-3xl font-bold flex justify-center items-center font-montserrat underline'>
          SAVE UP TO 55%
        </h1>
        <p className='mt-10 info-text'>
          Shop the Black Friday Sale before the crown -- sign in and use code{" "}
          <span className='font-bold'>*ACCESS</span> for an extra 25% off select
          styles. Ends soon.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <a href='https://www.nike.com/promo-code'>
            <Button label='Shop now' iconURL={arrowRight} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
