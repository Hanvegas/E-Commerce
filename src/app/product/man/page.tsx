import CardItem from '@/components/CardItem'
import CatalogSection from '@/components/section/catalog-section'
import { SpecificHeroSection } from '@/components/section/hero-section'
import React from 'react'

export default function ManProduct() {
      return (
            <main>
                  <SpecificHeroSection imageSrc='/images/categories/man-remove-bg.png' title='Find Your Signature Style!' scrollTo='man-product' />

                  <CatalogSection id='man-product' text="Man Product" level={2}>
                        <CardItem title="Casual Shirt" price="150.000 IDR" imageSrc="/images/clothes/tshirt.png" />
                        <CardItem title="Embrioded Sweater" price="300.000 IDR" imageSrc="/images/clothes/hoodie.png" />
                        <CardItem title="Graveyard Shirt" price="100.000 IDR" imageSrc="/images/clothes/shirt.png" />
                        <CardItem title="Leather Jacket" price="450.000 IDR" imageSrc="/images/clothes/jacket.png" />
                        <CardItem title="Casual Shirt" price="150.000 IDR" imageSrc="/images/clothes/tshirt.png" />
                        <CardItem title="Embrioded Sweater" price="300.000 IDR" imageSrc="/images/clothes/hoodie.png" />
                  </CatalogSection>
            </main>
      )
}