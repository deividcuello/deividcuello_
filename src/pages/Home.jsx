import React from 'react'
import { Link } from "react-router-dom";
import { HomeImg } from '../assets/images'

function home() {
  return (
    <div className='flex justify-between items-center flex-col md:flex-row gap-10'>
        <div>
            <img src={HomeImg} className='w-[32rem]'/>
        </div>
        <div className='mr-16 max-w-2xl flex flex-col gap-5'>
            
                <h2 className='text-4xl font-semibold'>👋 Hello there! I'm Deivid Cuello</h2>
                <span className='pr-16'>I'm not just a web developer; I'm a digital magician who brings your wildest online dreams to life.</span>
            
            <Link to="About" className='w-fit rounded-full'><button className='bg-blue-600 text-white py-2 px-5 rounded-full'>Who I am?</button></Link>
        </div>
    </div>
  )
}

export default home