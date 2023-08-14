import React from 'react'

function contact() {
  return (
    <div>
        <h2 className='text-2xl font-bold'>Get In Touch</h2>
        <form className='flex flex-col gap-5 items-center mx-auto mt-5 bg-blue-600 rounded-xl p-5 max-w-[50rem]'>
            <div className='flex flex-col md:flex-row gap-5 w-full'>
                <input type="text" placeholder='First name' className='flex-1 rounded-xl p-2 focus:outline-none'/>
                <input type="text" placeholder='Last name' className='flex-1 rounded-xl p-2 focus:outline-none'/>
            </div>
                <input type="email" placeholder='Email' className='w-full rounded-xl p-2'/>
                <textarea placeholder='Message' className='w-full rounded-xl p-2 resize-none h-52 focus:outline-none'></textarea>
                <input type="submit" value='Send' className='w-full rounded-xl bg-yellow-500 font-bold p-2 cursor-pointer'/>
        </form>
    </div>
  )
}

export default contact