import React from 'react'
import { chooseData } from '@/constants'
import './Chose.css'
import { ChooseItem } from '..'

type Props = {}

const ChooseSection = (props: Props) => {
  
  
  
  return (
    <div className="container">

    <div className='choose'>
      <h1 className='choose-title section-title'>
        {chooseData?.title.slice(0,10)} <strong>{chooseData?.title.slice(10)}</strong>
      </h1>


      <div className="choose-content">
        {
          chooseData?.choose.map((item , index) => (
            <ChooseItem {...item} key={item.id}/>
          ))
        }
      </div>

    </div>
    
    </div>
  )
}

export default ChooseSection