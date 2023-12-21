//@ts-nocheck
import React from 'react'
import axios from 'axios'
import { FaPhoneAlt } from "react-icons/fa";


type Props = {
  setshowFeedback:(showFeedback:boolean) => void;
}

const Hero:React.FC<Props> = ({setshowFeedback}) => {
const [heroData , setHeroData] = React.useState([])
const [mainData, setMainData] = React.useState([])


  React.useEffect(  () => {
    
    const getdata = async () => {
      const response = await axios.get(`http://localhost:1337/api/hero?populate=*`) 
      setHeroData(response?.data)

      const mainDataRes = await axios.get('http://localhost:1337/api/main-data?populate=*')
      setMainData(mainDataRes.data.data.attributes)
      
    }


    getdata()
  }, [])

  return (
    <section className="hero" style={{backgroundImage:`url(http://localhost:1337${heroData?.data?.attributes?.background?.data?.attributes?.url})`}} >
      <div className="container">
        <div className="hero_content">
          <h1 className="section_title">
            {
              heroData?.data?.attributes.title.slice(0, 23)
            }
            <br />
            {heroData?.data?.attributes.title.slice(23, 25)}
             <strong>{heroData?.data?.attributes.title.slice(25, 33)}</strong>
             {heroData?.data?.attributes.title.slice(33, 35)}
             <strong>{heroData?.data?.attributes.title.slice(35, 42)}</strong> 
             {heroData?.data?.attributes.title.slice(42)}
          </h1>

          <ul className="hero_content-list">
            {
            heroData?.data?.attributes?.hero_advantages?.hero_advantages.map(item => (
              <li key={item}>{item}</li>
            ))
            
            }
          </ul>

          <div className="hero_content-btns" >
            <a href="#"  onClick={() => setshowFeedback(true)}> Рассчитать стоимость </a>

            <a href={`tel:${mainData?.primary_phone}`} className="contact-tel">
            <FaPhoneAlt />
              {mainData?.primary_phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero