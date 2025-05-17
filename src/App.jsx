import './App.css'
import { LoaddingScreen } from './components/LoaddingScreen.jsx'
import { useState } from 'react';
import "./index.css";
import  Navbar  from './components/Navbar.jsx'
import Home from './components/sections/Home.jsx';
import About from './components/sections/About.jsx';
import Projects from './components/sections/Projects.jsx';
import Contact from './components/sections/Contact.jsx';
function App() {
const [isLoaded,setIsLoaded]=useState(false);
// we need ot keep track whether the menu is open or not on the smaller screens,Threfore we are creating the another 
// state variable called isMenuOpen
const [isMenuOpen,setIsMenuOpen]=useState(false);
  return (
    <>

    {/* here we are condititonllly rendering the is loading page ..like when is loades is true only then the page will render */}
   {!isLoaded && <LoaddingScreen  onComplete={()=>{
    setIsLoaded(true);
   }}/>}
   <div className={`min-h-screen transition-opacity  duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-gradient-to-r from-[#1a0033] via-[#4b0082] to-[rgb(196,94,111)]  text-gray-100`}>
<Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
<Home />
<About />
<Projects />
<Contact />

   </div>
    </>
  )
}

export default App
