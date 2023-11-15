import React from "react";
import { offer } from "@/assets/images";
import Button from "./Button";
import Image from "next/image";
import { arrowRight } from "@/assets/icons";

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
          Discover unbeatable deals at Nike! From top-tier sneakers to
          performance-driven apparel, explore our ongoing seasonal sales and
          exclusive member discounts. Elevate your style and game while enjoying
          incredible savings both online and in-store.
        </p>
        <p className='mt-5 info-text'>
          Join Nike's membership program for access to special discounts,
          birthday offers, and free shipping on all orders. Keep an eye on our
          periodic clearance events for amazing deals. Get your favorite Nike
          gear at prices that fit your budget!
        </p>
        <h1 className='mt-5 text-3xl font-bold flex justify-center items-center font-montserrat underline'>
          SAVE UP TO 55%
        </h1>
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
