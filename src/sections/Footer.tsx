import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full bg-black text-white py-10 px-4 mt-10'>
      <div className='max-w-6xl mx-auto' data-aos="fade-up">
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left'>
          {/* Column 1 */}
          <div className="flex flex-col gap-2"> 
            <h1 className="text-2xl font-bold mb-2 hover:scale-110 duration-300 text-amber-400 hover:text-amber-500 ease-in-out ">Shopsy</h1>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col gap-2 hover:scale-110 duration-300 text-amber-400 hover:text-amber-500 ease-in-out">
            <h1 className="text-2xl font-bold mb-2 ">Important Links</h1>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">Contact</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition">Blog</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold mb-2 hover:scale-110 duration-300 text-amber-400 hover:text-amber-500 ease-in-out">Connect With Us</h1>
            <div className="flex gap-6 justify-center md:justify-start text-2xl">
              <GrInstagram className="hover:text-pink-500 cursor-pointer transition hover:scale-110 duratio-300 ease-in-out" />
              <FaFacebook className="hover:text-blue-500 cursor-pointer transition hover:scale-110 duratio-300 ease-in-out" />
              <FaLinkedin className="hover:text-blue-400 cursor-pointer transition hover:scale-110 duratio-300 ease-in-out" />
            </div>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li className="flex items-center gap-2 justify-center cursor-pointer transition hover:scale-110 duratio-300 ease-in-out hover:text-white md:justify-start">
                <FaLocationArrow /> Noida, Delhi
              </li>
              <li className="flex items-center gap-2 justify-center  cursor-pointer transition hover:scale-110 duratio-300 ease-in-out hover:text-white md:justify-start">
                <FaMobileAlt /> +91 123456789
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer