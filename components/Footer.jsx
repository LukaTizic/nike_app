import { socialMedia } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className='bg-black padding-x pt-8 pb-8 text-white '>
      <div className='flex justify-center items-center'>
        &copy; 2023{" "}
        <a
          className='px-1'
          href='https://www.linkedin.com/in/luka-tizi%C4%87-529a1b240/'
        >
          Luka
        </a>
        {"  "}| All rights reserved
      </div>
      <div className='text-white flex flex-row justify-center mt-3 items-center cursor-pointer gap-16'>
        {socialMedia.map((item) => (
          <a href={item.link} target='_blank' key={item.alt}>
            <Image src={item.src} width={24} height={24} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
