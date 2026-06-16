import Clients from '@/components/home/Clients'
import ExpertSolutions from '@/components/services/ExpertSolutions'
import ServiceGridImage from '@/components/services/ServiceGridImage'
import ServiceHero from '@/components/services/ServiceHero'
import { createPageMetadata } from '@/lib/seo'
import React from 'react'

const page = () => {
  return (
    <>
      <ServiceHero />
      <ServiceGridImage />
      <ExpertSolutions />
      <Clients />
    </>
  )
}

export default page

export async function generateMetadata() {
  return createPageMetadata("/mita-energy");
}
