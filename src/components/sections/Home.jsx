import React from 'react'
import RaveelOnScroll from './RaveelOnScroll.jsx'
function Home() {
  return (
   <>

 <section id='home' className='min-h-screen flex justify-center items-center relative ' >
<div className='px-4 z-10 text-center '>
  <h1 className='text-5xl md:text-6xl font-bold mb-6  bg-gradient-to-tr from-blue-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent'>Hi, I am Zunaira Anwar.</h1>

  <p className='text-gray-500 text-lg mb-8 max-w-lg mx-auto'>Aspiring Full Stack Developer with a passion for building innovative and user-friendly applications.Skilled in HTML, CSS, JavaScript, React, Vue, and more. Looking to apply my skills in a challenging anddynamic environment to grow as a developer</p>


  <div className='flex justify-center space-x-4'>

  <a className='bg-blue-500 text-white py-3 px-5 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 
  hover:shadow[0_0_15px_rega(59,130,246,0.4)]' href="#projects">View Projects</a>

<a className='border border-blue-500/50 py-3 px-5 rounded font-medium transition-all duration-200 relative overflow-hidden hover:translate-y-0.5 
  hover:shadow[0_0_15px_rega(59,130,246,0.2)]  hover:bg-blue-500/10' href="#contact">Contact Me</a>

</div>


</div>


 </section>
   </>
  )
}

export default Home
