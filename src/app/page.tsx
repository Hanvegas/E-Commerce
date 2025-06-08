import CatalogSection from "@/components/section/catalog-section";
import HeroSection from "@/components/section/hero-section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Logo } from "@/components/ui/logo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=''>
      <HeroSection imageSrc="/images/cyberpunk.jpg">
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pl-26'>
          <Image
            src='/images/taylar.png'
            alt='Image'
            width={500}
            height={500}
            className='drop-shadow-[0_5px_30px_rgba(91,8,162,0.8)]'
          />
        </div>
        <Link href="/">
          <Logo layer={5} />
        </Link>
        <div className='flex justify-between items-center w-full z-30 mt-25'>
          <div className='w-auto mt-30'>
            <Heading
              color={'white'}
              level={1}
              className={"leading-14 backdrop-blur-sm rounded-full"}
            >
              Exclusive Collection <span className='block'>For Z-Generation</span>
            </Heading>
            <div className='flex mt-10 gap-6'>
              <Button variant={"primary"} size={"lg"}>Shop Now</Button>
              <Button variant={"primaryOutline"} size={"lg"}>Categories</Button>
            </div>
          </div>

          <div className='flex flex-col items-end w-auto mt-18 text-right text-white'>
            <span
              className='text-4xl font-bold leading-14 backdrop-blur-sm rounded-full'>
              Not just clothes
              <span className='block'>Choose your vibes</span>
            </span>
            <span
              className='block italic mt-8 text-2xl'>"Fashion that speaks before you do"
            </span>
          </div>
        </div>
      </HeroSection>

      <CatalogSection text="Best Seller" level={2}>
        <div className="w-auto h-80 bg-primary-200 rounded-xl drop-shadow-xl drop-shadow-primary-700"></div>
        <div className="w-auto h-80 bg-primary-200 rounded-xl drop-shadow-xl drop-shadow-primary-700"></div>
        <div className="w-auto h-80 bg-primary-200 rounded-xl drop-shadow-xl drop-shadow-primary-700"></div>
        <div className="w-auto h-80 bg-primary-200 rounded-xl drop-shadow-xl drop-shadow-primary-700"></div>
      </CatalogSection>
    </main>
  )
}