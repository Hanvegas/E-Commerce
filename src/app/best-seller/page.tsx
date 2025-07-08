import CardItem from '@/components/CardItem'
import CatalogSection from '@/components/section/catalog-section'
import { SpecificHeroSection } from '@/components/section/hero-section'
import React from 'react'

export default function BestSeller() {
      return (
            <main>
                  <SpecificHeroSection imageSrc='/images/artists/fashion6.png' title='Choose Your Style in New Era' scrollTo='best-seller' />

                  <CatalogSection text='Best Seller' level={1} id='best-seller'>
                        <CardItem title="Casual Shirt" price="150.000 IDR" imageSrc="/images/clothes/tshirt.png" />
                        <CardItem title="Casual Shirt" price="150.000 IDR" imageSrc="/images/clothes/tshirt.png" />
                        <CardItem title="Casual Shirt" price="150.000 IDR" imageSrc="/images/clothes/tshirt.png" />
                        <CardItem title="Casual Shirt" price="150.000 IDR" imageSrc="/images/clothes/tshirt.png" />
                        <CardItem title="Casual Shirt" price="150.000 IDR" imageSrc="/images/clothes/tshirt.png" />
                  </CatalogSection>
            </main>
      )
}