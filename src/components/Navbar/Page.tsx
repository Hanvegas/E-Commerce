import React from 'react'

const Navbar = () => {
      return (
            <div className='flex justify-between items-center py-6 px-14 text-black font-medium'>
                  <div className='flex gap-12'>
                        <p>SHOP</p>
                        <p>MEN</p>
                        <p>WOMEN</p>
                  </div>
                  <div className='flex items-center gap-10'>
                        <button className='text-sm font-normal rounded-full bg-black text-white px-6 py-4'>SIGN IN / UP</button>
                  </div>
            </div>
      )
}

export default Navbar