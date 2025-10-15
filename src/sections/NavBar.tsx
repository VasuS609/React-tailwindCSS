import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
// import { FaBars } from "react-icons/fa6";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const NavBar = () => {
  const menu = [
    {
      id: 1,
      name: "Home",
      link: "#",
    },
    {
      id: 2,
      name: "Ideas & Articles",
      link: "/about",
    },
    {
      id: 3,
      name: "Shop",
      link: "/shop",
    },
  ];

  const dropDown = [
    {
      id:1, 
      name:"Electronics",
      link:"/electronics"
    },
    {
      id:2,
      name:"scooter",
      link:"/scooter"
    },
    {
      id:3,
      name:"bicycle",
      link:"/bicycle"
    }
  ]

  return (
    <div>
      {/*upper navbar*/}
      <div className="flex items-center justify-around bg-amber-200 w-screen" >
        <div className="size-20 flex gap-2 w-60 -ml-20 text-center items-center">
          <a href="/">
            <img src={logo} alt="logo" className="size-20 hover: "  data-aos="fade-right"/>
         </a>
         <a href="/">
          <p className="text-xl sm:text-3xl font-semibold  text-amber-600 hover:scale-105 duratio-300 " data-aos="fade-left">Shopify</p>
         </a>
         
           
        </div>

        <div className="flex gap-3" data-aos= "zoom-in">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white border hover:scale-105 duration-500 hover:w-70 ease-out border-amber-400 focus:outline-amber-500 w-60 shadow-2xs shadow-amber-500 px-2 py-2 rounded-xl cursor-pointer"
          />
          <button className="cursor-pointer shadow-2xs text-2xl border flex justify-center items-center border-amber-300 px-2 w-15 py-1 rounded-md focus:outline focus:outline-amber-400">
            <CiSearch className="hover:scale-115" />
          </button>
        </div>

        <div>
  <button className="flex items-center gap-2 text-amber-700 text-xl sm:text-2xl group transition-all duration-300">
      
      {/* Text */}
      <span className="transition-all duration-300 group-hover:opacity-0 group-hover:scale-0">
        Cart
      </span>

      {/* Icon */}
      <span className="text-2xl sm:text-3xl transition-all duration-300 group-hover:scale-150">
        <FaShoppingCart />
      </span>

    </button>
        </div>
      </div>
      {/*Lower navbar*/}
   <div className="flex sm:justify-center gap-8 p-2 bg-slate-200 w-screen  shadow-2xl">
  <div>
    <ul className="flex gap-10 items-center">
      {menu.map((data) => (
        <li key={data.id}>
          <a href={data.link} className="hover:text-amber-700 font-medium">
            {data.name}
          </a>
        </li>
      ))}

      <li className="group hover:text-amber-700 font-medium relative cursor-pointer">
        <a href="/trending" className="flex items-center gap-1">
          Trending
          <span>
            <IoIosArrowDropdownCircle className="transition-all duration-200 group-hover:rotate-180 text-2xl" />
          </span>
        </a>
        <div className="absolute hidden group-hover:block w-[150px] rounded-md bg-white z-10 p-2 text-black shadow-md">
          <ul>
            {dropDown.map((data) => (
              <li key={data.id} className="hover:text-amber-700">
                <a href={data.link} className="inline-block w-full rounded-md p-2">{data.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </ul>
  </div>
</div>

      
    </div>
  );
};

export default NavBar;
