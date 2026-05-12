import AboutImage from '@/components/about/AboutImage'
import PageHero from '@/components/common/PageHero'
import NewsGrid from '@/components/news/NewsGrid'
import React from 'react'

const page = () => {
    return (
        <>
            <PageHero
                blinkBtnText="News"
                title="Key Updates and Major Milestones"
                description="Stay informed with our latest key updates and major milestones. Discover how we’re achieving new heights."
            />
            <AboutImage img="https://framerusercontent.com/images/mizGgBRcU6vhFnwyfurNosfR8cA.jpg" />
            <NewsGrid />
        </>
    )
}

export default page