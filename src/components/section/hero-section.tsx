import React, { ReactNode } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { ShadowBackground } from '../ui/shadow-background'
import Image from 'next/image'
import Link from 'next/link'
import { Heading } from '../ui/heading'
import { Logo } from '../ui/logo'
import { Button } from '../ui/button'

export default function HeroSection() {
      return (
            <section className='p-2 sm:p-4'>
                  <div className='relative flex justify-center overflow-hidden w-full h-[730px] sm:h-[96vh] rounded-4xl'>
                        {/* Background Hero */}
                        <div className='absolute inset-0'>
                              <Image src="/images/cyberpunk.jpg"
                                    alt='image'
                                    fill />
                        </div>

                        {/* Logo */}
                        <Link href="/">
                              <Logo layer={5}
                                    size="large"
                                    colorText="white"
                                    classNameText='drop-shadow-xl drop-shadow-primary-300'
                              />
                        </Link>

                        {/* ShadowBackground */}
                        <ShadowBackground
                              layer={1}
                              directionTo={'full'} />

                        <MaxWidthWrapper className="flex items-center h-full">
                              {/* Image Center */}
                              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 z-20 ml-9 w-1/2 h-3/4'>
                                    <Image src='/images/taylar.png'
                                          alt='Image'
                                          fill
                                          className='object-contain filter brightness-89' />
                              </div>

                              <div className='flex justify-between items-center w-full z-30 mt-25'>
                                    {/* CTA Left */}
                                    <div className='w-auto mt-30'>
                                          <Heading color={'white'}
                                                size={'medium'}
                                                level={1}
                                                className={"leading-14 text-white drop-shadow-lg drop-shadow-primary-500"}
                                          >Exclusive Collection <span className='block'>For Z-Generation</span>
                                          </Heading>
                                          <div className='flex mt-10 gap-6'>
                                                <Button variant={"primary"}
                                                      size={"lg"}
                                                      className='hover:drop-shadow-xl hover:drop-shadow-primary-500 duration-0'
                                                >Shop Now
                                                </Button>
                                                <Button variant={"primaryOutline"}
                                                      size={"lg"}
                                                      className='hover:drop-shadow-xl hover:drop-shadow-primary-500 duration-0'
                                                >Categories
                                                </Button>
                                          </div>
                                    </div>

                                    {/* Text Right */}
                                    <div className='flex flex-col items-end w-auto mt-18 text-right'>
                                          <span className='text-4xl font-bold leading-14 text-white drop-shadow-lg drop-shadow-primary-500'>Not just clothes<span className='block'>Choose your vibes</span></span>
                                          <span className='block italic mt-8 text-2xl text-white drop-shadow-lg drop-shadow-primary-500'>"Fashion that speaks before you do"</span>
                                    </div>
                              </div>
                        </MaxWidthWrapper>
                  </div>
            </section>
      )
}