import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ShadowBackground } from './ui/shadow-background'

type CardCategoryProps = {
      href: string
      image: string
      text: string
      rounded: "rounded-r-lg" | "rounded-l-lg" | "rounded-b-lg" | "rounded-t-lg" | "rounded-lg"
}

export default function CardCategory({ href, image, text, rounded }: CardCategoryProps) {
      return (
            <Link href={href} className={`relative overflow-hidden flex flex-col w-full h-full justify-end items-center text-7xl text-black text-shadow-lg text-shadow-primary-400 hover:text-8xl hover:text-white hover:drop-shadow-xl hover:drop-shadow-primary-300 hover:z-20 transition-[font-size] duration-600 ${rounded}`}>
                  <ShadowBackground directionTo={'top'} />
                  <Image src={image} alt={text} fill className='object-cover transition-all duration-1000'/>
                  <span className='relative mb-10 font-bold z-30'>{text}</span>
            </Link>
      )
}
