import React, { ReactNode } from 'react'
import { Heading } from '../ui/heading'
import MaxWidthWrapper from '../MaxWidthWrapper'

type CatalogSectionProps = {
      children?: ReactNode
      text: string
      level: 1 | 2 | 3 | 4 | 5 | 6
}

export default function CatalogSection({ children, text, level }: CatalogSectionProps) {
      return (
            <section className='w-full py-20'>
                  <MaxWidthWrapper>
                        <Heading color={'light2'} level={level} className="drop-shadow-xl drop-shadow-primary-500 text-center" >{text}</Heading>
                        <div className='w-full grid grid-cols-4 gap-7 mt-12'>
                              {children}
                        </div>
                  </MaxWidthWrapper>
            </section >
      )
}
