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
      <div className="flex items-center justify-around bg-amber-200 w-screen">
        <div className="size-20 flex">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white border border-amber-400 focus:outline-amber-500 w-60 px-2 py-2 rounded-xl cursor-pointer"
          />
          <button className="cursor-pointer text-2xl border border-amber-300 px-2 py-1 rounded-md focus:outline focus:outline-amber-400">
            <CiSearch />
          </button>
        </div>

        <div>
          <button className="flex text-xl items-center gap-2">
            Cart <FaShoppingCart />
          </button>
        </div>
      </div>
      {/*Lower navbar*/}
      <div className="flex sm:justify-center gap-8 p-2 bg-slate-200 w-screen shadow-md">
        <div>
          <ul className="flex gap-6 items-center">
            {menu.map((data) => (
              <li key={data.id} >
                <a
                  href={data.link}
                  className="hover:text-amber-700 font-medium"
                >
                  {data.name}
                </a>
              </li>
            ))}

            <li className="group hover:text-amber-700 font-medium   relative cursor-pointer ">
              <a href="/trending" className="flex items-center gap-1">
                Trending
                <span>
                  <IoIosArrowDropdownCircle className="transition-all duration-200 group-hover:rotate-180 size-4 " />
                </span>
              </a>
              <div className="absolute  hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {dropDown.map((data)=>(
                    <li className="hover:text-amber-700"
                    key={data.id} >
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
