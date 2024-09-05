import React, { useRef, useEffect } from 'react';
import { star } from "../assets/icons";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PopularProductCard = ({ imgURL, name, price }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const element = scrollRef.current;

    gsap.fromTo(
      element,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        delay: 0.5, 
        scrollTrigger: {
          trigger: element,
          start: 'top 80%', 
          end: 'top 20%',
          scrub: 1,
          once: true, 
        },
      }
    );
  }, []);

  return (
    <div ref={scrollRef} className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt='rating icon' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
