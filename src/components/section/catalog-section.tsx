import React, { ReactNode } from 'react'
import { Heading } from '../ui/heading'
import MaxWidthWrapper from '../MaxWidthWrapper'

type CatalogSectionProps = {
      children?: ReactNode
      text: string
      level: 1 | 2 | 3 | 4 | 5 | 6
      id?: string
}

export default function CatalogSection({ children, text, level, id }: CatalogSectionProps) {
      return (
            <section id={id} className='w-full py-20'>
                  <MaxWidthWrapper>
                        <Heading color={'light3'} level={level} className="drop-shadow-xl drop-shadow-primary-500 text-center" >{text}</Heading>
                        <div className='w-full grid grid-cols-4 gap-x-9 gap-y-14 mt-15'>
                              {children}
                        </div>
                  </MaxWidthWrapper>
            </section >
      )
}
