import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='container mx-auto h-full text-center text-white mt-5'>
        <span>&copy; 2023 <a href="https://github.com/deividcuello" target='_blank' className='underline text-yellow-500'>Deivid Cuello</a> Web Development. All rights reserved.</span>
    </footer>
  )
}

export default Footer