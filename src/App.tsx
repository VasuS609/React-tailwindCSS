import './App.css'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'

function App() {
 

  return (
    <div className='w-screen h-screen container'>
      <div>
        <NavBar/>
        <Hero/> 
      </div>
    </div>
  )
}

export default App
