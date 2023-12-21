import React from 'react'
import FeadbackDone from './FeadbackDone'
import closeIcon from '../../../assets/img/close.svg'
import axios from 'axios';

type Props = {
  setshowFeedback:(showFeedback:boolean) => void;
  showFeedback:boolean;
}

const FeedbackForm:React.FC<Props> = ({setshowFeedback,showFeedback}) => {
  const [showDone, setShowDone] = React.useState(false)
  const [number, setnumber] = React.useState('')
  const [username, setuserame] = React.useState('')

  const handleClose = (e:any) => {
    if (e.target.id === 'feedback') {
      setshowFeedback(false)
    }
  } 

  const sendFeedback = async (e:any) => {
    e.preventDefault()
    try {
        const response = await axios.post(`http://localhost:1337/api/feedbacks`, {data:{ username,  phone_number:number}})
        setShowDone(true)
        setTimeout(() => {
          setShowDone(false)
        }, 1500);
    } catch (err) {
      console.log(err);
      setShowDone(false)
    }
  }

  return (
    <div id='feedback' className={`feedback ${showFeedback ? 'fadeIn' : 'fadeOut'}`} onClick={handleClose}>
      <div className="feedback-content">
        <div className="feedback-close" onClick={() => setshowFeedback(false)}>
          <img src={closeIcon?.src} alt="ico" />
        </div>
        
        {
          !showDone && 
          <div className="feedback-wrap">
          <div className="feedback__title">
            Бесплатная <strong>консультация</strong>
          </div>
          <div className="feedback__text">
            Введите свои контакты и мы свяжемся с вами в течение 5 минут
          </div>
          <form action="#" className="feedback-form" onSubmit={sendFeedback}>
            <div className="feedback-form__input">
              <label htmlFor="name">
                Как вас зовут: *
              </label>
              <input value={username} onChange={(e) => setuserame(e.target.value)} type="text" id="name" placeholder="Ваше имя"/>
            </div>
            <div className="feedback-form__input">
              <label htmlFor="tel">
                Номер телефона: *
              </label>
              <input value={number} onChange={(e) => setnumber(e.target.value)} type="tel" id="tel" className="form__tel" placeholder="Введите Ваш телефон" maxLength={19} required pattern="^[0-9-+\s()]*$" />
            </div>
            <button  className="btn">
              ЗАКАЗАТЬ ЗВОНОК
            </button>
          </form>
        </div>
        }
        
         {
          showDone &&  <FeadbackDone/>
         }

      </div>
    </div>
  )
}

export default FeedbackForm