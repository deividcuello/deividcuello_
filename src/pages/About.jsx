import React from 'react'
import { Link } from "react-router-dom";
import { AboutProfile } from '../assets/images'

function about() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
        <div>
            <img src={AboutProfile} className='w-72 md:w-96'/>
        </div>
        <div className='max-w-xl md:mr-20 flex flex-col gap-4'>
            <h2 className='text-2xl font-bold text-center md:text-start'>Crafting Digital Experiences: Unveiling the Artistry of Deivid Cuello</h2>
            <div className='md:text-start text-center'>
                <p>In a world where every pixel holds potential, I am Deivid Cuello, a passionate web developer and digital craftsman. With an unwavering fascination for the intricate dance between design and code, I embark on a journey to shape captivating online experiences.</p>
                <br></br>
                <p>Driven by a creative spark and a commitment to excellence, I weave together lines of code like strokes of a brush on a canvas. My toolbox includes a mastery of HTML, CSS, and JavaScript, allowing me to seamlessly translate visions into interactive realities. Beyond the technical realm, I understand the essence of user-centric design – a philosophy that transforms websites into intuitive, engaging, and memorable journeys.</p>
            </div>
            <Link to="/skills" className='w-fit rounded-full'><button className='bg-blue-600 text-white py-2 px-5 rounded-full'>My skills</button></Link>
        </div>
    </div>
  )
}

export default about