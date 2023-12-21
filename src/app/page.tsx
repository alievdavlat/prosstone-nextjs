'use client'

import { ChooseSection, Guarant, Header, Hero, Partners, Products, Projects, Reviews, Seo, TelBtn, Map, Footer, FeedbackForm, TelPopup } from '@/components'
import ZoomImage from '@/components/common/ZoomImage'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  const [showTelPopUp , setShowTelPopUp] = React.useState(false)
  const [showFeedback, setshowFeedback] = React.useState(false)
  const [showZoomPopup, setShowPopup] = React.useState(false)
  
  const [imgUrl, setImgUrl] = React.useState('')

  return (
    <div className='app'>
      {
        showZoomPopup && <ZoomImage imgUrl={imgUrl}   setShowPopup={setShowPopup}/>
      }
      
      {
        showFeedback && <FeedbackForm  showFeedback={showFeedback} setshowFeedback={setshowFeedback} />
      }
      {
      showTelPopUp && <TelPopup showTelPopUp={showTelPopUp} setshowFeedback={setshowFeedback} setShowTelPopUp={setShowTelPopUp}/>
      }
        <TelBtn  setShowTelPopUp={setShowTelPopUp}/>
        <Header setshowFeedback={setshowFeedback}/>
        <Hero setshowFeedback={setshowFeedback}/>
        <ChooseSection/>
        <Products setshowFeedback={setshowFeedback}/>
        <Guarant setshowFeedback={setshowFeedback}/>
        <Projects setshowFeedback={setshowFeedback} setShowPopup={setShowPopup} setImgUrl={setImgUrl}/>
        <Reviews/>
        <Partners/>
        <Footer/>
    </div>
  )
}

export default page