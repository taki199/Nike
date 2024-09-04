
import {headerLogo} from "../assets/images"
import {hamburger} from "../assets/icons"
import {navLinks} from "../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Nav = () => {

  useGSAP(()=>{
    gsap.fromTo('#header',{
      y:-100,

    },{
      y:0,
      ease:'elastic',
      duration:3,
      delay:4,
      opacity:1
    })

  })
  return (
    <header id="header" className="padding-x py-8 absolute z-10 w-full opacity-0 ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
        <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
        
          {navLinks.map((item)=>(
         <li key={item.label}>
             <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
             </a>
             
         </li>
           
          ))}
          
        </ul>
        <div className="hidden max-lg:block cursor-pointer">
            <img src={hamburger} alt="" width={25} height={25} />
        </div>
        
      </nav>
    </header>
  )
}

export default Nav