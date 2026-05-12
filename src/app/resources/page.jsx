import AboutImage from '@/components/about/AboutImage'
import PageHero from '@/components/common/PageHero'
import ExpertHub from '@/components/resources/ExpertHub'
import React from 'react'

const page = () => {
    return (
        <>
            <PageHero
                blinkBtnText="resources"
                title="Essential Tools and Expert Information"
                description="Access vital tools and expert insights crafted to deepen your architectural knowledge and boost your outcomes."
            />
            <AboutImage img="https://framerusercontent.com/images/iE3iOF9YdOHu9KY0k20orxiXA.jpg" />
            <ExpertHub />
        </>
    )
}

export default page