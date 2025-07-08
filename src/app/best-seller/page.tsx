import CardItem from '@/components/CardItem'
import CatalogSection from '@/components/section/catalog-section'
import React from 'react'

export default function BestSeller() {
      return (
            <main>
                  <CatalogSection text='Best Seller' level={1}>
                        <CardItem title="Casual Shirt" price="150.000 IDR" imageSrc="/images/clothes/tshirt.png" />
                        <CardItem title="Casual Shirt" price="150.000 IDR" imageSrc="/images/clothes/tshirt.png" />
                        <CardItem title="Casual Shirt" price="150.000 IDR" imageSrc="/images/clothes/tshirt.png" />
                        <CardItem title="Casual Shirt" price="150.000 IDR" imageSrc="/images/clothes/tshirt.png" />
                        <CardItem title="Casual Shirt" price="150.000 IDR" imageSrc="/images/clothes/tshirt.png" />
                  </CatalogSection>
            </main>
      )
}