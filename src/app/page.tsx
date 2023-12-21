'use client'

import { ChooseSection, Guarant, Header, Hero, Partners, Products, Projects, Reviews, Seo, TelBtn, Map, Footer, FeedbackForm, TelPopup } from '@/components'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  const [showTelPopUp , setShowTelPopUp] = React.useState(false)
  const [showFeedback, setshowFeedback] = React.useState(false)
  return (
    <div className='app'>
     
      
      {
        showFeedback && <FeedbackForm setshowFeedback={setshowFeedback} />
      }
      {
      showTelPopUp && <TelPopup setshowFeedback={setshowFeedback} setShowTelPopUp={setShowTelPopUp}/>
      }
        <TelBtn  setShowTelPopUp={setShowTelPopUp}/>
        <Header setshowFeedback={setshowFeedback}/>
        <Hero setshowFeedback={setshowFeedback}/>
        <ChooseSection/>
        <Products setshowFeedback={setshowFeedback}/>
        <Guarant setshowFeedback={setshowFeedback}/>
        <Projects setshowFeedback={setshowFeedback}/>
        <Reviews/>
        <Partners/>
        <Footer/>
    </div>
  )
}

export default page