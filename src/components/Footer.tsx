import React from 'react'
import { Logo } from './ui/logo'
import { List } from './ui/list'

export default function Footer() {
      return (
            <footer className='relative flex justify-between items-center w-full h-auto py-20 px-30'>
                  <div className='absolute top-0 left-1/2 -translate-x-1/2 border-t-2 border-white w-[90%]'></div>
                  <div className=' text-white'>
                        <Logo justify="relative" size="large" colorText="white" />
                        <span className='mt-4 block text-5xl font-bold text-primary-300'>&copy; {new Date().getFullYear()}</span>
                  </div>
                  <div className='flex gap-50 text-white'>
                        <div>
                              <span className='mb-2 block font-bold text-xl text-primary-300'>SHOP</span>
                              <ul className='grid grid-rows-4 gap-2'>
                                    <List>Product</List>
                                    <List>Man</List>
                                    <List>Woman</List>
                              </ul>
                        </div>
                        <div>
                              <span className='mb-2 block font-bold text-xl text-primary-300'>INFO</span>
                              <ul className='grid grid-rows-4 gap-2'>
                                    <List>Instagram</List>
                                    <List>Facebook</List>
                                    <List>Twitter</List>
                                    <List>Whatsapp</List>
                              </ul>
                        </div>
                  </div>
            </footer>
      )
}
