import React from "react";
import { emailService } from "@/constants";
import SubscribeCard from "./SubscribeCard";

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='padding-x py-10 max-w-container flex justify-center flex-wrap gap-9'
    >
      <div>
        {emailService.map((service) => (
          <SubscribeCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Subscribe;
