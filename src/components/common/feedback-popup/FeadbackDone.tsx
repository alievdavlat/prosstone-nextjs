import React from 'react'
import doneIcon from '../../../assets/img/done.svg'

type Props = {}

const FeadbackDone = (props: Props) => {
  return (
    <div className="feedback-done">
    <div className="feedback__img">
      <img src={doneIcon.src} alt="ico" />
    </div>
    <div className="feedback__title">
      Спасибо, ваша <strong>заявка принята!</strong>
    </div>
    <div className="feedback__text">
      В ближайшее время с вами свяжется наш специалист.
    </div>
  </div> 
   )
}

export default FeadbackDone