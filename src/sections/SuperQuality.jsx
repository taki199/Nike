import { useGSAP } from "@gsap/react";
import { shoe8 } from "../assets/images";
import  Button from "../components/Button";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const SuperQuality = () => {
  const scrollRef=useRef(null)
  const scrollLeft=useRef(null)
 

  useEffect(()=>{
    const element = scrollRef.current;
    const el=scrollLeft.current;


    gsap.fromTo(el,{
      x: -500,
      opacity: 0,
    },{
      x:0,
      opacity:1,
      delay:5,
      duration:6,
     ease:'power1.inOut',
      scrollTrigger: {
        trigger: element,
        
        scrub: 1,
        once: true, 
      },

    })

    gsap.fromTo(element,{
      y:-500,
      opacity:0,
      scale:0,

    },{
      y:0,
      delay:3,
      duration:4,
      opacity:1,
      scale:1,
      ease:'power1.inOut',
      scrollTrigger: {
        trigger: element,
        scrub: 2,
        once: true, 
      }
     
    })

  },[])
  
 
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div ref={scrollLeft} className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div ref={scrollRef} className='flex-1 flex justify-center items-center'>
        <img
          id="shoe"
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;