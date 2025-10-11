import Img from "../assets/men.png";
import { GiClothes } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="container h-[550px]">     

    
    <div className="flex justify-center w-screen h-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        {/*image section */}
        <div data-aos="zoom-in-down" className="bg-gradient-to-tl from-amber-600 to-bg-amber-100 z-10 drop-shadow-xl">
            <img src={Img} alt=""  className="objec-cover " />
        </div>
        {/*text section */}
        <div className="p-10 space-y-4">
          <h1 className="text-3xl sm:text-6xl font-semibold ">Winter Sale upto <span className="text-8xl text-amber-700 hover:scale-110 duration-300" data-aos="fade-up ">50%</span>off</h1>
          <p className="text-xl font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, tenetur!</p>
          <div data-aos="fade-left" className="flex text-xl gap-2 items-center font-semibold bg-gradient-to-tr from-amber-400 to-amber-200 p-3 text-white hover:scale-105 duration-500">
            <GiClothes />
            <p>Good Quality</p>
          </div>
          <div data-aos="fade-left" className="flex text-xl gap-2 items-center font-semibold bg-gradient-to-tr from-amber-400 to-amber-200 p-3 text-white hover:scale-105 duration-500">
            <TbTruckDelivery />
            <p>Fast Delivery</p>
          </div>
          <div data-aos="fade-left" className="flex text-xl gap-2 items-center font-semibold bg-gradient-to-tr from-amber-400 to-amber-200 p-3 text-white hover:scale-105 duration-500">
            <MdOutlinePayment />
            <p>Easy Purchases</p>
          </div>
          <div data-aos="fade-left" className="flex text-xl gap-2 items-center font-semibold bg-gradient-to-tr from-amber-400 to-amber-200 p-3 text-white hover:scale-105 duration-500">
            <BiSolidOffer />
            <p>Great Offers</p>
          </div>
       </div>      
      </div>
      
    </div></div>
  )
}

export default Banner
