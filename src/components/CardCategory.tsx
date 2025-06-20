import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardCategoryProps = {
      href: string
      image: string
      text: string
      rounded: "rounded-r-lg" | "rounded-l-lg" | "rounded-b-lg" | "rounded-t-lg" | "rounded-lg"
}

export default function CardCategory({href, image, text, rounded}: CardCategoryProps) {
      return (
            <Link href={href} className={`relative flex flex-col w-full h-full justify-end items-center overflow-hidden ${rounded}`}>
                  <Image src={image} alt={text} fill className='object-cover hover:scale-110 transition-all duration-1000' />
                  <span className='relative mb-10 text-7xl font-bold text-white'>{text}</span>
            </Link>
      )
}
