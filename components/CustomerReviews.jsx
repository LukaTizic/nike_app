import React from "react";
import { reviews } from "@/constants";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  return (
    <section className='bg-pale-blue padding max-container'>
      <h3 className='font-palanquin capitalize text-center text-4xl font-bold'>
        What our <span className='text-red-500 '>Customers</span> say?
      </h3>
      <p className='font-montserrat text-slate-gray text-lg leading-7 m-auto mt-4 max-w-lg text-center'>
        Genuine stories from our satisfied customers about their exceptional
        experience with us.
      </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
