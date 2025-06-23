import Image from 'next/image'
import React, { ReactNode } from 'react'

type BentoSectionProps = {
      children: ReactNode
}

export default function BentoSection({children}: BentoSectionProps) {
      return (
            <section className='flex items-center justify-center w-full h-220 my-20 px-6'>
                  <div className='grid grid-cols-12 grid-rows-12 gap-4 h-full w-full'>
                        {children}
                  </div>
            </section> 
      )
}
