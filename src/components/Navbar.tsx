import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Button } from './ui/button'
import { CustomLink } from './ui/custom-link'

export default function Navbar() {
      return (
            <header className='absolute top-0 left-0 w-full z-40'>
                  <MaxWidthWrapper>
                        <nav className='w-full flex justify-between py-6 mt-4 backdrop-blur-sm'>
                              <ul className='flex gap-18 text-xl text-white'>
                                    <li><CustomLink href='/man' text='Man'/></li>
                                    <li><CustomLink href='/woman' text='Woman'/></li>
                                    <li><CustomLink href='/categories' text="Categories"/></li>
                              </ul>

                              <ul className='flex gap-4 text-xl'>
                                    <li>
                                          <Link href="/login">
                                                <Button asChild variant={'secondaryOutline'} size={'lg'} className='rounded-xl'>
                                                      <span>Login</span>
                                                </Button>
                                          </Link>
                                    </li>
                                    <li>
                                          <Link href="/register">
                                                <Button asChild variant={'secondary'} size={'lg'} className='rounded-xl'>
                                                      <span>Sign In</span>
                                                </Button>
                                          </Link>
                                    </li>
                              </ul>
                        </nav>
                  </MaxWidthWrapper>
            </header>
      )
}
