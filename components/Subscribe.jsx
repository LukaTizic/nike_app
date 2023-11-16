import { emailService } from "@/constants";
import SubscribeCard from "./SubscribeCard";
import Button from "./Button";
import Image from "next/image";
import { arrowRight } from "@/assets/icons";

const Subscribe = () => {
  return (
    <section id='contact-us' className='padding-x py-10 flex flex-col mt-20 '>
      <div className=' max-w-container flex justify-center flex-wrap gap-9 '>
        {emailService.map((service) => (
          <SubscribeCard key={service.label} {...service} />
        ))}
      </div>
      <div className='flex justify-end mt-10'>
        <a className='max-w-[150px] ' href='mailto:lukatizic7@gmail.com'>
          <Button label='Contact Us' iconURL={arrowRight} />
        </a>
      </div>
    </section>
  );
};

export default Subscribe;
