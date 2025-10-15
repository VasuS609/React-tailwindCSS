import './App.css'
import Products from './sections/Products'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'
import AOS from "aos";
import React from 'react';
import "aos/dist/aos.css"
import TopProduct from './sections/TopProduct';
import Banner from './sections/Banner';
import Subscribe from './sections/Subscribe';
import Testimonial from './sections/Testimonial';
import Footer from './sections/footer';

function App() {
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing: "ease-in-sine",
      delay:100
    })
    AOS.refresh();
  },[])
 

  return (
    <div className='w-screen h-screen container'>
      
        <NavBar/>
        <Hero/> 
        <Products/>
        <TopProduct/>
        <Banner/>
        <Subscribe/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default App
