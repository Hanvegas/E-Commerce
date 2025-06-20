import React, { ReactNode } from 'react'

type CategorySectionProps = {
      children: ReactNode
}

export default function CategorySection({ children }: CategorySectionProps) {
      return (
            <section className='flex w-full h-200 py-20 px-6'>
                  {children}
            </section>
      )
}
