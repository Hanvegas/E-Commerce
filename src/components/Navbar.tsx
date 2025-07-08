import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Button } from './ui/button'
import { CustomLink } from './ui/custom-link'
import { Logo } from './ui/logo'
import { List } from './ui/list'
import Image from 'next/image'

export function Navbar() {
      return (
            <header className='absolute top-0 left-0 w-full z-40'>
                  <MaxWidthWrapper>
                        <nav className='w-full flex justify-between py-6 mt-4 backdrop-blur-sm'>
                              <ul className='flex gap-18 text-xl text-white'>
                                    <li><CustomLink hoverVariant="hoverCenter" href='/man' text='Man' /></li>
                                    <li><CustomLink hoverVariant="hoverCenter" href='/woman' text='Woman' /></li>
                                    <li><CustomLink hoverVariant="hoverCenter" href='/best-seller' text="Best Seller" /></li>
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


export function MainNavbar() {
      return (
            <header className='sticky top-4 z-50'>
                  <MaxWidthWrapper>
                        <nav className='flex justify-between py-2 px-8 bg-slate-100 rounded-2xl'>
                              <ul className='flex items-center gap-12 py-4 font-semibold text-primary-700'>
                                    <List><CustomLink href='/'><Logo colorText="dark2" /></CustomLink></List>
                                    <List><CustomLink hoverVariant="hoverCenter" colorUnderline="primaryDark2" text='Man' href='/pruduct/man' /></List>
                                    <List><CustomLink hoverVariant="hoverCenter" colorUnderline="primaryDark2" text='Woman' href='/pruduct/woman' /></List>
                                    <List><CustomLink hoverVariant="hoverCenter" colorUnderline="primaryDark2" text='Best Seller' href='/best-seller' /></List>
                              </ul>
                              <ul className='flex items-center gap-12 py-4 font-semibold text-primary-700'>
                                    <List>
                                          <CustomLink href='/cart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-8 hover:git=">
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                                </svg>
                                          </CustomLink>
                                    </List>
                                    <List>
                                          <CustomLink href='/setting'>
                                                <div className='relative w-10 h-10 bg-primary-700 rounded-full cursor-pointer'>
                                                      <Image src="/images/taylar.png" alt='image' fill className='object-contain' />
                                                </div>
                                          </CustomLink>
                                    </List>
                              </ul>
                        </nav>
                  </MaxWidthWrapper>
            </header>
      )
}