import NewsDetailContent from '@/components/news/NewsDetailContent'
import NewsDetailHero from '@/components/news/NewsDetailHero'
import OtherNews from '@/components/news/OtherNews'
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