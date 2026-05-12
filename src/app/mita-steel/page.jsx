import Clients from '@/components/home/Clients'
import ExpertSolutions from '@/components/services/ExpertSolutions'
import ServiceGridImage from '@/components/services/ServiceGridImage'
import ServiceHero from '@/components/services/ServiceHero'
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