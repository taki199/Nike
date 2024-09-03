
const Button = ({label,iconURL}) =>{
    return (
        <button id="btn" className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red ">
        {label}
        {/* img */}
        <img className="ml-2 rounded-full w-5 h-5" src={iconURL} alt="arrow" />
        
    </button>
    )
} 

export default Button