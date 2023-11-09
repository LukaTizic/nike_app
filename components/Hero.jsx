import Image from "next/image";
import Button from "./Button";
import { arrowRight } from "@/public/icons";
import { statistics, shoes } from "@/constants";
import { bigShoe1 } from "@/public/images";
import ShoeCard from "./ShoeCard";

const Hero = () => {
  return (
    <section
      id='home'
      className='xl:padding-1 wide:padding-r padding-b flex flex-col '
    >
      <div className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  '>
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 '>
          <p className='text-xl font-montserrat text-red-500'>
            Our Summer collection
          </p>
          <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
              The New Arrival
            </span>
            <br />
            <span className='text-red-500 inline-block mt-3'>Nike </span> Shoes
          </h1>
          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm '>
            Discover stylist <span className='text-red-500'>Nike</span>{" "}
            arrivals, quality, comfort, and innovation for your active life.
          </p>
          <Button label='Shop Now' iconURL={arrowRight} />
          <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
            {statistics.map((item) => (
              <div key={item.label}>
                <p className='text-4xl font-palanquin font-bold'>
                  {item.value}
                </p>
                <p className='leading-7 font-montserrat text-slate-gray'>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary '>
          <Image
            src={bigShoe1}
            width={610}
            height={500}
            alt='shoe collection'
            className='relative z-10 object-contain'
          />
          <div>
            <div>
              {shoes.map((shoe) => (
                <div key={shoe}>
                  <ShoeCard />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
