import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CardItemProps {
      title: string
      label?: string
      imageSrc: string
      direct?: string
      price: string
}

export default function CardItem({ title, label, imageSrc, direct = "#", price }: CardItemProps) {
      return (
            <Link href={direct} className="w-full h-auto drop-shadow-xl drop-shadow-primary-500">
                  <div className='relative w-full min-h-80 bg-amber-50 rounded-t-xl'>
                        <div className='absolute inset-0 w-full h-full flex justify-center items-center hover:scale-110 hover:transition-all duration-400'>
                              <Image src={imageSrc} alt={title} fill className='object-cover hover:drop-shadow-xl hover:drop-shadow-primary-200 p-4' />
                        </div>
                  </div>

                  <div className='bg-primary-800 w-full h-auto rounded-b-xl px-4 pt-3 pb-6'>
                        <span className='text-2xl font-semibold text-white truncate'>{title}</span>
                        <span className='block text-white text-lg mt-2'>{price}</span>
                  </div>
            </Link>
      )
}
