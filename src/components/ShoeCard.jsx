

const Shoe = ({imgURL,changeBigShoeImage,bigShoeImg}) => {
  const handleClick=()=>{
   if(bigShoeImg!==imgURL.bigShoe){
    changeBigShoeImage(imgURL.bigShoe)
   }
  }
  return (
    <div className={`border-2 rounded-xl
      ${bigShoeImg===imgURL
        ? 'border-coral-red':'border-transparent'
      }cursor-pointer max-sm:flex-1
       
     `}onClick={handleClick()}
     >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img className="object-contain" src={imgURL.thumbnail} width={127} height={103} alt="shoe collection" />
      </div>
      
    </div>
  )
}

export default Shoe 