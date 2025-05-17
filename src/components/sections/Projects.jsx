import React from 'react'
import RaveelOnScroll from './RaveelOnScroll.jsx'
function Projects() {
  return (
    <section id='projects' className='min-w-screen flex items-center justify-center py-2'> 
      <div className='max-w-5xl mx-auto px-4 '>
         <h2 className='text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent text-center'>Featured Projects</h2>

         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[59_138_2246_0.2] transition-all'>
          <h3 className='text-xl font-bold mb-2'>CRUD Application</h3>
          <p className='text-gray-400 mb-4'>A basic CRUD (Create, Read, Update, Delete) app to practice database
          interaction</p>
          {["React","Node.js","Express.js","MongoDB"].map((tech,key)=>(
            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
            hover:bg-blue-500/20  hover:shadow[0_2px_8px_rgba(59,130,2246,0.2)] transition-all
            ' key={key}>{tech}</span>
          ))}
          <div className='flex justify-between items-center my-4 '> 
  <a className='text-blue-400  hover:text-blue-300 transition-colors border p-2 border-white/10 hover:border-blue-500/10' href="#">View Project →</a>
</div>
        </div>

        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[59_138_2246_0.2] transition-all'>
          <h3 className='text-xl font-bold mb-2'>E-Commerce Front-End</h3>
          <p className='text-gray-400 mb-4'>Created a front-end prototype to practice user interface design.</p><br/>
          {["React","Node.js","Express.js","MongoDB" ,"TailwindCSS"].map((tech,key)=>(
            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
            hover:bg-blue-500/20  hover:shadow[0_2px_8px_rgba(59,130,2246,0.2)] transition-all
            ' key={key}>{tech}</span>
          ))}

<div className='flex justify-between items-center my-4 '> 
  <a className='text-blue-400  hover:text-blue-300 transition-colors border p-2 border-white/10 hover:border-blue-500/10' href="#">View Project →</a>
</div>
        </div>

        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[59_138_2246_0.2] transition-all'>
          <h3 className='text-xl font-bold mb-2'>File Upload App</h3>
          <p className='text-gray-400 mb-4'>Built a small app to handle file uploads with a user-friendly interface.</p>
          {["React","Node.js","Express.js","MongoDB" ,"TailwindCSS"].map((tech,key)=>(
            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
            hover:bg-blue-500/20  hover:shadow[0_2px_8px_rgba(59,130,2246,0.2)] transition-all
            ' key={key}>{tech}</span>
          ))}

<div className='flex justify-between items-center my-4 '> 
  <a className='text-blue-400  hover:text-blue-300 transition-colors border p-2 border-white/10 hover:border-blue-500/10' href="#">View Project →</a>
</div>
        </div>


        <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[59_138_2246_0.2] transition-all'>
          <h3 className='text-xl font-bold mb-2'>Weather App</h3>
          <p className='text-gray-400 mb-4'>Built a simple weather forecasting app using APIs to fetch real-time weather data.</p>
          {["React","Node.js","Express.js","MongoDB" ,"TailwindCSS"].map((tech,key)=>(
            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
            hover:bg-blue-500/20  hover:shadow[0_2px_8px_rgba(59,130,2246,0.2)] transition-all
            ' key={key}>{tech}</span>
          ))}

<div className='flex justify-between items-center my-4 '> 
  <a className='text-blue-400  hover:text-blue-300 transition-colors border p-2 border-white/10 hover:border-blue-500/10' href="#">View Project →</a>
</div>

        </div>


         </div>

      </div>
    </section>
  )
}

export default Projects
