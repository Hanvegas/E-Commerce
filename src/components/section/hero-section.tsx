import React, { ReactNode } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { ShadowBackground } from '../ui/shadow-background'
import Image from 'next/image'
import Link from 'next/link'
import { Heading } from '../ui/heading'
import { Logo } from '../ui/logo'
import { Button } from '../ui/button'

export function HeroSection() {
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
                                    margin="mt3"
                                    variant="center"
                                    size="large"
                                    colorText="white"
                                    classNameText='drop-shadow-xl drop-shadow-primary-300'
                                    color="dark"
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

type SpecificHeroSectionProps = {
      imageSrc: string
      title: string
      scrollTo?: string
}

export function SpecificHeroSection({ imageSrc, title, scrollTo }: SpecificHeroSectionProps) {
      return (
            <section className='p-2 sm:p-4'>
                  <div className='relative flex justify-center items-end overflow-hidden w-full h-[730px] sm:h-[96vh] rounded-4xl'>
                        {/* Background Hero */}
                        <div className='absolute inset-0'>
                              <Image src="/images/cyberpunk.jpg"
                                    alt='image'
                                    fill />
                        </div>

                        {/* ShadowBackground */}
                        <ShadowBackground
                              layer={1}
                              directionTo={'full'} />

                        {/* Content */}
                        <MaxWidthWrapper className="relative flex items-center w-full h-full z-20">
                              <div className='relative flex items-end w-full h-full mt-22'>
                                    <Image src={imageSrc} alt={title} fill className='object-cover drop-shadow-2xl drop-shadow-primary-200 filter brightness-0' />
                              </div>
                              <div className='flex flex-col justify-center w-full'>
                                    <Heading color="white" level={1} className="drop-shadow-xl drop-shadow-primary-500 text-center leading-18">{title}</Heading>
                                    <Button asChild variant="primaryOutline" size='lg' className='mt-14 hover:drop-shadow-xl hover:drop-shadow-primary-500 duration-0'>
                                          <a href={`#${scrollTo}`}>
                                                Shop Now
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-5 ml-2">
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                                                </svg>
                                          </a>
                                    </Button>
                              </div>
                        </MaxWidthWrapper>
                  </div>
            </section>
      )
}
