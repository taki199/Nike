import { useState } from "react"
import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import { shoes, statistics } from "../constants"
import { useEffect } from "react"
import { bigShoe1 } from "../assets/images"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ShoeCard from "../components/ShoeCard"



const Hero = () => {
  const [count, setCount] = useState(0);

  // useGSAP(()=>{
  //    gsap.fromTo("#hero", {
  //     y:0
  //    },{
  //     y: -80,
      
  //    }),
  //    gsap.to('#title',{
  //     duration: 1, 
  //     x:100,
  //     ease:'power1.inOut'
  //    }),
  //    gsap.to('#btn',{
  //     duration: 2, 
  //     x:100,
  //     ease:'power1.inOut'
  //    })

  // },[])
 
 useEffect(()=>{
  const interval=setInterval(()=>{
    setCount((prevCount)=>{
       if(prevCount<500){
        return prevCount+1
       }else{
        clearInterval(interval);
        return prevCount
       }
    })
  })
 },10000)

  
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
       <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
       <h1 id="title" className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold pb-4">
        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
        The New Arrival
        </span>
        <br />
        <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat  text-slate-gray text-lg  leading-8 mt-6 mb-14 sm:max-w-sm">Discover Stylish Nike Arrivals,Quality comfort,and innovation for active life.</p>
        <Button id="btn" label="Shop now" iconURL={arrowRight}/>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat)=>(
            <div key={stat.label} className="">
              <p className="text-4xl font-palanquin font-bold">{count}{''} K</p> 
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              
            </div>
          ))}
        </div>
      </div>
      <div className=" relative flex-1  flex  items-center justify-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img id="hero" className="object-contain relative z-10"  src={bigShoe1} height={500} width={610} alt="Shoe collection" />
        <div>
          {shoes.map((shoe)=>
            <div key={shoe} className="flex relative justify-center items-center">
              <ShoeCard  
              imgURL={shoe}
              changeBigShoeImage={()=>{}}
              bigShoeImg=""
              />
                
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero