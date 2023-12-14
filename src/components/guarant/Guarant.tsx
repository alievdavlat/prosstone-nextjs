import React from 'react'
import { guarantsData } from '@/constants'
import './guarants.css'

type Props = {}

const Guarant = (props: Props) => {
  console.log(guarantsData.title.slice(0,11));
  
  return (
  <div className="guarants-wrapp">
    <div className='guarants' style={{backgroundImage:`url(${guarantsData.bg.src})`}}>
        <div className='guarants-left'>

          <p>
            {guarantsData?.title.slice(0,11)} <br />
            <strong>{guarantsData?.title.slice(11)}</strong>
          </p>

          <button className='guarants-left_btn'>
          Консультация
          </button>

        </div>

        <div className='guarants-right'>
          <p>{guarantsData?.subtitle}</p>

          <div className='guarants-right_image'>
            <img src={guarantsData?.image?.src} alt="guarants" />
          </div>
        </div>
    </div>
  </div>
  )
}

export default Guarant