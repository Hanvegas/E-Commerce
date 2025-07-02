import React, { ReactNode } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Image from 'next/image'

export default function ContactSection() {
      return (
            <section className='py-20'>
                  <MaxWidthWrapper className="flex justify-between items-center">
                        <div className='w-[60%]'>
                              <span className='text-9xl font-bold text-white'>Cnct._</span>
                              <span className='text-9xl font-bold text-white block'>with us</span>
                              <p className='text-white text-xl w-[70%] my-10 leading-10'>Got questions or need assistance? Our team is here to help you navigate the future of fashion. Reach out to us anytime—let’s connect and gear you up for what’s next!</p>
                              <div className='relative w-[70%]'>
                                    <form>
                                          <label htmlFor="contact-input" className="sr-only">Ask a question</label>
                                          <input id="contact-input" type="text" className="text-white w-full border-b-2 border-white focus:outline-none pb-3" placeholder="Ask a question.." />
                                          <button type="submit" className='cursor-pointer'>
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      fill="none"
                                                      viewBox="0 0 24 24"
                                                      strokeWidth={1.5}
                                                      stroke="currentColor"
                                                      className="absolute top-0 right-0 size-6 text-white"
                                                >
                                                      <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                                      />
                                                </svg>
                                          </button>
                                    </form>
                              </div>
                        </div>
                        <div className='relative w-[40%] h-140'>
                              <Image src="/images/shirt-store.jpg" alt='' fill className='object-cover rounded-sm' />
                        </div>
                  </MaxWidthWrapper>
            </section>
      )
}
