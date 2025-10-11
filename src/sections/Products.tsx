
import WomenImage1 from "../assets/women1.png"
import WomenImage2 from "../assets/women2.png"
import WomenImage3 from "../assets/women3.png"
import WomenImage4 from "../assets/women4.png"
import WomenImage5 from "../assets/women5.png"

const Products = () => {
  const Products = [
    { id: 1, title: "Womens Wear", brand: "zara", rating: "4.5", img: WomenImage1 },
    { id: 2, title: "Womens Caasual", brand: "zara", rating: "4.7", img: WomenImage2 },
    { id: 3, title: "Womens Traditional", brand: "Raymond", rating: "4.8", img: WomenImage3 },
    { id: 4, title: "womens western", brand: "louis", rating: "4.2", img: WomenImage4 },
    { id: 5, title: "womens goggles", brand: "ray ben", rating: "4.9", img: WomenImage5 }
  ]

  return (
    <div className='w-screen pb-30 '>
      <div className="flex flex-col items-center">
      <div className='flex flex-col items-center space-y-1.5 sm:space-y-3 mt-2 sm:mt-4 p-8'>
        <p data-aos="fade-up" className= ' text-xl font-semibold text-center'>Top Selling Products for You!!!</p>
        <h1 data-aos="fade-up" className='text-3xl sm:text-5xl font-bold font-serif text-amber-700 text-center'>Products</h1>
        <p data-aos="fade-up" className='text-center sm:w-[750px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, repellat.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique modi at doloremque nemo voluptatibus,
          voluptatum eveniet labore, molestiae nesciunt nisi vitae. Dolore facilis laborum voluptates.
        </p>
      </div>

      {/* Center images / cards */}
      <div className='flex flex-wrap justify-center gap-8 w-full max-w-6xl mx-auto shadow-xl z-10 space-y-3 shadow-emerald-100 '>
        {Products.map((data) => (
          <div>        
          <div
          data-aos="fade-up"
          data-aos-delay={data.aosDelay}
           key={data.id} className='flex justify-center items-center'>
            <img
              src={data.img}
            className='w-48 h-64 object-contain rounded-md hover:scale-110 object-fit '/>
            
          </div>
          <div className="flex font-semibold flex-col items-center">
           <h1 className="">{data.title} </h1> 
          <p>⭐{data.rating}</p>
          </div>
   
           </div>
        ))}
      </div></div>
    </div>
  )
}

export default Products