import CardCategory from "@/components/CardCategory";
import CardItem from "@/components/CardItem";
import BentoSection from "@/components/section/bento-section";
import CatalogSection from "@/components/section/catalog-section";
import CategorySection from "@/components/section/category-section";
import HeroSection from "@/components/section/hero-section";
import { BentoBox } from "@/components/ui/bento-box";
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
        <CardItem title="Casual Shirt" price="150.000 IDR" imageSrc="/images/clothes/tshirt.png" />
        <CardItem title="Embrioded Sweater" price="300.000 IDR" imageSrc="/images/clothes/hoodie.png" />
        <CardItem title="Graveyard Shirt" price="100.000 IDR" imageSrc="/images/clothes/shirt.png" />
        <CardItem title="Leather Jacket" price="450.000 IDR" imageSrc="/images/clothes/jacket.png" />
      </CatalogSection>

      <BentoSection>
        <BentoBox col={3} row={12} rounded="xl" className="relative">
          <Image src="/images/artists/fashion1.jpg" alt="image" fill className="object-cover rounded-xl" />
        </BentoBox>
        <BentoBox col={6} row={4} rounded="xl" className="relative">
          <Image src="/images/artists/fashion2.jpg" alt="image" fill className="object-cover rounded-xl" />
        </BentoBox>
        <BentoBox col={3} row={12} rounded="xl" className="relative">
          <Image src="/images/artists/fashion3.jpg" alt="image" fill className="object-cover rounded-xl" />
        </BentoBox>
        <BentoBox col={3} row={8} rounded="xl" className="relative">
          <Image src="/images/artists/fashion4.jpg" alt="image" fill className="object-cover rounded-xl" />
        </BentoBox>
        <BentoBox col={3} row={8} rounded="xl" className="relative">
          <Image src="/images/artists/fashion5.jpg" alt="image" fill className="object-cover rounded-xl" />
        </BentoBox>
      </BentoSection>

      <CategorySection>
        <CardCategory href='/man' image='/images/categories/man.jpeg' text='/man' rounded='rounded-l-lg' />
        <CardCategory href='/woman' image='/images/categories/woman.jpeg' text='/woman' rounded='rounded-r-lg' />
      </CategorySection>
    </main>
  )
}