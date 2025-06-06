import HeroSection from "@/components/section/hero-section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Logo } from "@/components/ui/logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className='p-2 sm:p-4'>
      <HeroSection imageSrc="/images/cyberpunk.jpg">
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pl-24'>
          <Image
            src='/images/taylar.png'
            alt='Image'
            width={500}
            height={500}
            className='drop-shadow-[0_5px_30px_rgba(91,8,162,0.8)]'
          />
        </div>
        <Logo layer={5}/>
        <div className='flex justify-between items-center w-full z-30'>
          <div className='w-auto mt-30'>
            <Heading
              color={'white'}
              level={1}
              className={"leading-14 backdrop-blur-sm rounded-xl"}
            >
              Exclusive Collection <span className='block'>For Z-Generation</span>
            </Heading>
            <div className='flex mt-10 gap-6'>
              <Button variant={"primary"} size={"lg"}>Shop Now</Button>
              <Button variant={"secondaryOutline"} size={"lg"}>Categories</Button>
            </div>
          </div>

          <div className='flex flex-col items-end w-auto mt-18 text-right text-white'>
            <span
              className='text-4xl font-bold leading-14 backdrop-blur-sm rounded-xl'>
              Not just clothes
              <span className='block'>Choose your vibes</span>
            </span>
            <span
              className='block italic mt-8 text-2xl'>"Fashion that speaks before you do"
            </span>
          </div>
        </div>
      </HeroSection>

    </main>
  )
}