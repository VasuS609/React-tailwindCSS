import Image1 from "../assets/shopping1.png";
import Image2 from "../assets/shopping2.png";
import Image3 from "../assets/shopping3.jpg";

import Slider from "react-slick";

const ImageList = [
  { id:1,
    img:Image1,
    title:"Shopping",
    description:"lorem ipsum "
  }, {
    id:2,
    img:Image2,
    title:"Shopping list",
    description:"lorem ipsum have "
  }, {
     id:3,
    img:Image3,
    title:"Shopping list have",
    description:"lorem ipsum have item"}];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 justify-center flex items-center w-screen duration-200">
      {/* background pattern */}
      <div className="sm:h-[700px] sm:w-[700px] h-[450px] w-[450px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 bg-amber-200"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} className="grid grid-cols-2 sm:grid-cols-2 items-center">
              {/* text section */}
              <div className="flex flex-col justify-center mt-10 sm:mt-20  gap-4 px-12 py-0 ml-20 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                  {data.title}
                </h1>
                <p className="text-sm text-gray-600">
                  {data.description}
                </p>
                <div>
                  <button className="bg-gradient-to-r from-amber-300 to-amber-500 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                    Order now
                  </button>
                </div>
              </div>

              {/* image section */}
              <div  className="order-1 sm:order-2 flex justify-center">
                <img 
                  src={data.img}
                  alt={`slide-${data.id}`}
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-110 object-contain relative"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
