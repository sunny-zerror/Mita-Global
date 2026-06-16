import NewsDetailContent from '@/components/news/NewsDetailContent'
import NewsDetailHero from '@/components/news/NewsDetailHero'
import OtherNews from '@/components/news/OtherNews'
import { createPageMetadata } from '@/lib/seo'
import React from 'react'

const page = () => {
  return (
    <>
        <NewsDetailHero/>
        <NewsDetailContent/>
        <OtherNews/>
    </>
  )
}

export default page

export async function generateMetadata() {
  return createPageMetadata("/news");
}
