import { products } from "@/constants";
import PopularProductCard from "./PopularProductCard";
import Button from "./Button";
import { arrowRight } from "@/assets/icons";

const PopularProducts = () => {
  return (
    <section className='padding max-container max-sm:mt-12' id='products'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-red-500'> Popular</span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. discover a world of comfort, design, and value!
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
      <div className=' flex justify-end mt-10'>
        <a href='https://www.nike.com/w/mens-best-76m50znik1' target='_blank'>
          <Button label='See More' iconURL={arrowRight} />
        </a>
      </div>
    </section>
  );
};

export default PopularProducts;
