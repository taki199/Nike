import React, { useEffect, useRef } from 'react'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({imgURL,label,subtext}) => {
    const scrollRef = useRef(null);
    useEffect(()=>{
       const element = scrollRef.current;
       gsap.fromTo(element,{
        opacity:0,
        x:-500
       },{
        opacity:1,
        x:0,
        duration:1.5,
        delay:3,
        ease:'power1.inOut',
        scrollTrigger:{
            trigger: element,
            once:true,
            scrub:1
        }
       })
    },[])
    return (
        <div ref={scrollRef} className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
          <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
            <img src={imgURL} alt={label} width={24} height={24} />
          </div>
          <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
            {label}
          </h3>
          <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
            {subtext}
          </p>
        </div>
      );
    };

export default ServiceCard