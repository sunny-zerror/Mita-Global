import AboutImage from '@/components/about/AboutImage'
import PageHero from '@/components/common/PageHero'
import AllProjects from '@/components/projects/AllProjects'
import React from 'react'

const page = () => {
  return (
    <>
        <PageHero
        blinkBtnText="Portfolio"
        title="Gallery of Our Signature Projects"
        description="Browse our portfolio to see a collection of innovative and impactful projects that highlight our architectural expertise."
      />
      <AboutImage img="https://framerusercontent.com/images/m0alTV7gdqjPGA1LNtWL5pRXe8.jpg" />
        <AllProjects/>
    </>
  )
}

export default page