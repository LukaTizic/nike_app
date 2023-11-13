import React from "react";
import { services } from "@/constants";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className='padding-x py-10 max-w-container flex justify-center flex-wrap gap-9 '>
      {services.map((service) => (
        <ServiceCard />
      ))}
    </section>
  );
};

export default Services;
