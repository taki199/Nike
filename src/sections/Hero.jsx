import { useState,useEffect } from "react";

import { shoes, statistics } from "../constants";

import ShoeCard from '../components/ShoeCard'

import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);


  const [isAnimating, setIsAnimating] = useState(false);

  const changeBigShoeImage = (newImg) => {
    if (bigShoeImg !== newImg) {
      setIsAnimating(true);

      // Animate the image out
      gsap.to("#img", {
       
        y: -50,
        x:1000,
        duration:3,
        ease: 'power1.inOut',
        rotate:-160,
        onComplete: () => {
          // Update the image after the fade-out
          setBigShoeImg(newImg);
          setIsAnimating(false);
        },
      });
    }
  };
  // useGSAP(()=>{
  //   gsap.fromTo('.bg-hero',{
  //     opacity:0,
  //     x:2000
  //   },{
  //     opacity:1,
  //     x:-50,
  //     duration:8,
  //     delay:2.5,
  //     ease:'elastic'
  //   })  
  // },[])
  useEffect(() => {
    if (!isAnimating) {
      // Animate the new image in
      gsap.fromTo("#img", {
        opacity: 1,
        y: 50,
        rotate:0,
        x:1100,
        ease:'back.in'
      }, {
        zIndex:10,
        opacity: 1,
        y: 0,
        duration: 4,
        x:0,
        ease: 'power1.inOut',
        rotate:360,
        
      });
    }
  }, [bigShoeImg, isAnimating]);

  


  useGSAP(()=>{
   gsap.fromTo('#title',{
    x: -200,
   },{
    ease:'power1.inOut',
    delay:3,
    zIndex:10,
    opacity:1,
    duration:4,
    x:50
   },
  gsap.fromTo('#para',{
    x:-100,
    
  },{
    x:0,
    duration:4,
    delay:2,
    ease:'elastic',
    opacity:1
  },

))
  },[])
  

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>

        <h1 id="title"  className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold opacity-0'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span  className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p id="para" className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm opacity-0'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label='Shop now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          id="img"
          src={bigShoeImg}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10 opacity-0 '
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={changeBigShoeImage}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;