import React from 'react'
import Link from "next/link"
import { Star, ArrowUp } from 'lucide-react'
import { SectionHeader } from '../common/section-header'
import { Button } from '../ui/button'
import { ProductCard } from '../products/product-card'

const featuredProducts=[
  {
    id:1,
    name:"ParityKit",
    description:"A toolkit for creating parity products.",
    tags: ["SaaS", "Pricing", "Global"],
    votes: 615,
    isFeatured: true
  },
  {
    id:2,
    name:"Developer to Leader",
    description:"A course on Data Engineering and Leadership.",
    tags: ["Course", "Leadership"],
    votes: 489,
    isFeatured: true
  },
  {
    id:3,
    name:"DataStack Insights",
    description:"A newsletter on data engineering trends.",
    tags: ["Newsletter", "Data Engineering"],
    votes: 320,
    isFeatured: false
  },
]

export const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title={"Featured Today"}
            icon={Star}
            description={"Top picks from our community this week."}
          />

          <Button variant="default" asChild className="hidden sm:flex mr-4">
            <Link href="/explore" className="flex items-center gap-2">
              View All
              <ArrowUp className="size-4" />
            </Link>
          </Button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Placeholder for featured products */
            featuredProducts.map((product)=>(
              <ProductCard key={product.id} product={product}/>
            )
            )
            }
        </div>
      </div>
    </section>
  )
}