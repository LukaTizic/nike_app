import Image from "next/image";
import { star } from "@/assets/icons";

const ReviewCard = ({ customerName, rating, feedback }) => {
  return (
    <div
      className='flex justify-center items-center flex-col
    '
    >
      <p className='mt-6 max-w-sm text-center font-montserrat text-slate-gray text-lg leading-7'>
        {feedback}
      </p>
      <div className='mt-3 flex justify-center items-center gap-2'>
        <Image
          src={star}
          alt='star'
          width={24}
          height={24}
          className='object-contain m-0'
        />
        <p className='font-montserrat text-slate-gray text-xl'>({rating})</p>
      </div>
      <h2 className='mt-1 text-3xl font-palanquin text-center font-bold'>
        {customerName}
      </h2>
    </div>
  );
};

export default ReviewCard;
