import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='container mx-auto mt-5 flex-1'>
                <div className='bg-white p-5 rounded-xl'>
                {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout