import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import './Tel.css'

type Props = {}

const TelBtn = (props: Props) => {
  return (
   <>
   <a className='Tel-btn' href="tel:+998999331564">
    <FaPhoneAlt  size={23}/>
   </a>
   </>
  )
}

export default TelBtn