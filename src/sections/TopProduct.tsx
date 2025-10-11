import shirt1 from "../assets/shirt1.png";
import shirt2 from "../assets/shirt2.png";
import shirt3 from "../assets/shirt3.png";


const TopProduct = () => {  
  const shirts =[{
    src:shirt1,
    category:"Casula Wear",
    description:"lorem ipsum dolor sit amet",
    rating:"4.2",
    id:1
  },{
    src:shirt2,
    category:"Printed Wear",
    description:"lorem ipsum dolor sit amet",
    rating:"4.9",
    id:2
  },{
    src:shirt3,
    category:"Women Wear",
    description:"lorem ipsum dolor sit amet",
    rating:"4.6",
    id:3
  },
  ]

  return (
    <div className='w-screen pb-40'>
      <div className='flex  flex-col items-center w-full '>
        {/*top rated section */}
        <div className='flex flex-col items-center space-y-1.5 sm:space-y-3 mt-2 sm:mt-4 p-8 pb-16 '>
        <p  data-aos="fade-up" className= ' text-xl font-semibold text-center'>Trending Products</p>
        <h1  data-aos="fade-up" className='text-3xl sm:text-5xl font-bold font-serif text-amber-700 text-center'>Top Rated Products</h1>
        <p  data-aos="fade-up" className='text-center sm:w-[750px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, repellat.
         </p>
      </div>

      {/*products */}

      <div  className="flex bg-amber-100 h-175 p-10 shadow-amber-500">
        {shirts.map((data)=>(
          <div  key={data.id} >
            <img  data-aos="zoom-in" src={data.src} alt="" className="hover:scale-110  size-[450px] shadow-amber-900 z-10"/>
            <div>
              
            </div>
            <div className="grid space-y-1 justify-center text-center">
             <p className="font-bold text-xl p-2 text-amber-900 hover:scale-110 duration-300">{data.category}</p>
            <p className="font-semibold">{data.description}</p>
            <p  data-aos="zoom-in" className="font-bold text-xl">⭐{data.rating}</p>
            <button className="bg-gradient-to-r from-amber-500 to-amber-300 px-2 py-2 mt-2 rounded-md text-xl font-semibold hover:cursor-pointer hover:scale-110 duration-400 text-white">Order now</button>
            </div>

          </div>
        ))}

      </div>
      </div>
    </div>
  )
}

export default TopProduct
