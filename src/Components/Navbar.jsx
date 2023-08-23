import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
    const [menu, setMenu] = useState(false)
  return (
    <header className='container mx-auto bg-black md:flex justify-between py-2 mt-2 px-6 items-center md:rounded-full rounded-xl text-white'>
        <div className='flex justify-between items-center border-b md:border-none border-white md:py-0 py-2'>
            <Link to="/"><h1 className='text-2xl font-bold'>Deivid Cuello</h1></Link>
            <AiOutlineMenu className='text-2xl cursor-pointer block md:hidden'/>
        </div>
        <nav className='hidden md:flex md:flex-row flex-col gap-6 md:mt-0 mt-5'>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Skills">Skills</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
        </nav>
        {menu &&
        <nav className='flex md:flex-row flex-col gap-6 md:mt-0 mt-5'>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Skills">Skills</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
        </nav>
        }
    </header>
  )
}

export default Navbar