import React, { ReactNode } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { ShadowBackground } from '../ui/shadow-background'
import Image from 'next/image'

type HeroSectionProps = {
      imageSrc: string
      children?: ReactNode
}

export default function HeroSection({ imageSrc, children }: HeroSectionProps) {
      return (
            <section className='relative flex justify-center overflow-hidden w-full h-[730px] sm:h-[96vh] rounded-4xl'>
                  <div className='absolute inset-0'>
                        <Image src={imageSrc} alt='image' fill />
                  </div>
                  <ShadowBackground directionTo={'full'} layer={1}/>
                  <MaxWidthWrapper className="flex items-center h-full">
                        {children}
                  </MaxWidthWrapper>
            </section>
      )
}