import Image2 from "../assets/testimonial2.png";
import Image3 from "../assets/testimonial3.png";
import Image1 from "../assets/testimonial1.png";
import Image4 from "../assets/testimonial4.jpeg";
import Image5 from "../assets/testimonial5.jpeg";
import Slider from "react-slick";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      img: Image1,
      name: "alex",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 2,
      img: Image2,
      name: "alex",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 3,
      img: Image3,
      name: "alex",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 4,
      img: Image4,
      name: "alex",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 5,
      img: Image5,
      name: "alex",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center">
        <div className="w-full max-w-6xl">
          {/*text section */}
          <div className="flex flex-col items-center mb-8">
            <p className="text-xl sm:text-2xl font-semibold text-blue-950 ">What Our Customers Say?</p>
            <h1 className="text-3xl sm:text-6xl text-amber-700 font-bold p-4">Testimonial</h1>
            <p className="text-xl sm:text-2xl text-blue-950 font-semibold text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, atque.</p>
          </div>
          {/*Images */}
          <div className="slider-container p-8 w-full">
            <Slider  {...settings}>
              {testimonials.map((data) => (
                <div key={data.id} className=" p-4gap-3  ">
                  <img src={data.img} className="h-32 w-32 object-cover rounded-full " alt={data.name} />
                  <div>
                    <p>{data.review}</p>
                    <h5 className="font-semibold uppercase">{data.name}</h5>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;