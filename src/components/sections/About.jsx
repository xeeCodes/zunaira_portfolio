import React from 'react'
import RaveelOnScroll from "./RaveelOnScroll.jsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUniversity } from '@fortawesome/free-solid-svg-icons';
const frontendSkills=[
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vue",
  "Tailwind CSS",
"Bootstrap",
]

const backendSkills=[
  "Node.js",
  "Python",
  "SQlite",
  "MongoDB",
  "Express.js",

]
function About() {
  return (
    <section id='about' className='min-w-screen flex justify-center items-center py-20  ' >
      <div className='max-w-3xl mx-6 px-auto'>
        <h2 className='text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent text-center'>About Me</h2>

        <div className='   hover:translate-y-1 transition-all'> 
  <p className='mb-6  text-gray-300 justify-center text-center'>
    Passionate developer with expertise in building scalable web applications and creaitng innovative designs</p>
</div>

<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
  <div className='rounded-xl hover:translate-y-1 transition-all'>
    <h3 className='text-xl font-bold mb-4 '>Frontend</h3>
    <div className='flex flex-wrap gap-2'>

      {frontendSkills.map((tech,key)=>(

        <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
        hover:bg-blue-500/20  hover:shadow[0_2px_8px_rgba(59,130,2246,0.2)] transition-all
        '>{tech}</span>
      ))}
    </div>
    

  </div>
  <div className='rounded-xl hover:translate-y-1 transition-all'>
    <h3 className='text-xl font-bold mb-4 '>Backend</h3>
    <div className='flex flex-wrap gap-2'>

      {backendSkills.map((tech,key)=>(

        <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
        hover:bg-blue-500/20  hover:shadow[0_2px_8px_rgba(59,130,2246,0.2)] transition-all
        '>{tech}</span>
      ))}
    </div>
    

  </div>
</div>


<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
  <div className='rounded-xl border-white/10 hover:-translate-y-1 transition-all'>
    <h3 className='text-xl font-bold mb-4 '><FontAwesomeIcon icon={faUniversity} className=" text-white   text-xl" /> 
     <span> Education</span></h3>

     <ul className='list-disc list-inside space-y-4 text-gray-300'>
      <li>
        <strong > B.S. in Computer Engineering</strong> <span  className='text-gray-400'>- Comstas University Ialamabad, Lahore (2020 - 2024) </span>
      </li>
      <li>
        <strong>FYP on "INFRA-STRUCTURE LESS TRANSMITTER PROTOTYPE USING MICRO-CONTROLLER “</strong> <span className='text-gray-400'>where i designed an algorithm and code to generate the sine and cosine waves to generate BPSK and QPSK
        signals.</span> 
      </li>
     </ul>
    
    

  </div>
  <div className='rounded-xl border-white/10 hover:-translate-y-1 transition-all'>
    <h3 className='text-xl font-bold mb-4 '><FontAwesomeIcon icon={faBriefcase} className="text-white text-xl" />
 
     <span> Work Experience</span></h3>
    <div>
      <h4 className='mb-4'><strong>Mern Stack Developer Intern</strong> at Smart Computings, Lahore (Jan 2025 - March 2025)</h4>
      <ul className='list-disc list-inside space-y-4 '> 
  <li className='text-gray-300'>
    <strong>Gas Measuring System (React)</strong><br />
    <ul className='list-disc list-inside ml-4 space-y-1'>
      <li className='text-gray-400'>Redesigned the user flow for a gas measuring system, including device selection, gas meter selection, and method choice.</li>
      <li className='text-gray-400'>Worked on front-end development to improve user experience and ensure seamless interaction with the system.</li>
    </ul>
  </li>

  <li className='text-gray-300'>
    <strong>Generator Monitoring System (Vue)</strong><br />
    <ul className='list-disc list-inside ml-4 space-y-1'>
      <li className='text-gray-400'>Developed a Vue.js-based application to monitor parameters like fuel level, temperature, and device status for generator management.</li>
      <li className='text-gray-400'>Designed a system for real-time fuel monitoring and automatic temperature regulation to prevent accidents and optimize fuel refilling.</li>
    </ul>
  </li>
</ul>
  </div>
    

  </div>
  
</div>


      </div>
    </section>
  )
}

export default About
