import CardCategory from "@/components/CardCategory";
import CardItem from "@/components/CardItem";
import BentoSection from "@/components/section/bento-section";
import CatalogSection from "@/components/section/catalog-section";
import CategorySection from "@/components/section/category-section";
import ContactSection from "@/components/section/contact-section";
import HeroSection from "@/components/section/hero-section";
import { BentoBox } from "@/components/ui/bento-box";
import Image from "next/image";

export default function Home() {
  return (
    <main className=''>
      <HeroSection />

      <CatalogSection text="Best Seller" level={2}>
        <CardItem title="Casual Shirt" price="150.000 IDR" imageSrc="/images/clothes/tshirt.png" />
        <CardItem title="Embrioded Sweater" price="300.000 IDR" imageSrc="/images/clothes/hoodie.png" />
        <CardItem title="Graveyard Shirt" price="100.000 IDR" imageSrc="/images/clothes/shirt.png" />
        <CardItem title="Leather Jacket" price="450.000 IDR" imageSrc="/images/clothes/jacket.png" />
      </CatalogSection>
      
      <CategorySection>
        <CardCategory href='/man' image='/images/categories/man.jpeg' text='/man' rounded='rounded-l-lg' />
        <CardCategory href='/woman' image='/images/categories/woman.jpeg' text='/woman' rounded='rounded-r-lg' />
      </CategorySection>

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
      
      <CatalogSection text="Latest Products" level={3}>
        <CardItem title="Casual Shirt" price="150.000 IDR" imageSrc="/images/clothes/tshirt.png" />
        <CardItem title="Embrioded Sweater" price="300.000 IDR" imageSrc="/images/clothes/hoodie.png" />
        <CardItem title="Graveyard Shirt" price="100.000 IDR" imageSrc="/images/clothes/shirt.png" />
        <CardItem title="Leather Jacket" price="450.000 IDR" imageSrc="/images/clothes/jacket.png" />
        <CardItem title="Casual Shirt" price="150.000 IDR" imageSrc="/images/clothes/tshirt.png" />
        <CardItem title="Embrioded Sweater" price="300.000 IDR" imageSrc="/images/clothes/hoodie.png" />
        <CardItem title="Graveyard Shirt" price="100.000 IDR" imageSrc="/images/clothes/shirt.png" />
        <CardItem title="Leather Jacket" price="450.000 IDR" imageSrc="/images/clothes/jacket.png" />
      </CatalogSection>

      <ContactSection />
    </main>
  )
}