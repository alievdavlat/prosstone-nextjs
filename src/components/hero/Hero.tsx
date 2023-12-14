import React from 'react'
import { heroData } from '@/constants'
import './Hero.css'

const Hero = () => {


  return (
    <div className='hero' style={{backgroundImage:`url(${heroData.bg.src})`}}>

      <div className="container">

        <div className="hero-text">

         <h1>
          {heroData?.title.slice(0, 22)} <br />
          {heroData?.title.slice(22, 25)}
            <strong>
              {heroData?.title.slice(25, 32)}
            </strong>
          {heroData?.title.slice(32, 34)}
          <strong>{heroData?.title.slice(34, 41)}</strong>
          {heroData?.title.slice(41)}
        </h1>

          <ul className='hero-text_services'>
            {
              heroData.heroServices.map((item, index) => (
                <li key={item.id}>
                  <img src={item?.icon?.src} alt="hero services" />
                  <span>
                  {item.title}
                  </span>
                </li>
              ))
            }
          </ul>

        <div className="hero-text_btns">
          <button>
            Рассчитать стоимость
          </button>
           <a href="tel:+998999331564">+998 (99) 933 15 64</a>
        </div>
        
          
        </div> 
       
      </div>

    </div>
  )
}

export default Hero