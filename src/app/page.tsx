'use client'

import { ChooseSection, Guarant, Header, Hero, Products, Seo, TelBtn } from '@/components'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <TelBtn/>
        <Header/>
        <Hero/>
        <ChooseSection/>
        <Products/>
        <Guarant/>
    </div>
  )
}

export default page