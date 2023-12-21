//@ts-nocheck
import React from 'react'
import axios from 'axios'

type Props = {
  setshowFeedback:(showFeedback:boolean) => void;
}
const Guarant:React.FC<Props> = ({setshowFeedback}) => {
    const [guarants, setguarants] = React.useState([])

  React.useEffect(() => {
    const getGuarant = async () => {
      const response = await axios.get(`http://localhost:1337/api/guarant?populate=*`)
      setguarants(response?.data?.data?.attributes)
      
    }
    getGuarant()
    }, [])

    
  return (
    <section data-aos="fade-right" class="guarants">
        <div class="container">
          <div class="guarants_wrapp">
            <div class="guarants-left">
              <h2>
                {guarants?.title?.slice(0, 11)} <br/> <strong>{guarants?.title?.slice(11)}</strong>
              </h2>

              <a href="#"  class="feedback-open" onClick={() => setshowFeedback(true)}>
                Консультация
              </a>

            </div>

            <div class="guarants-right">
              <p>
                {guarants?.subtitle}
              </p>
              
            <div class="guarants-right_img">
                <img src={`http://localhost:1337${guarants?.brands?.data?.attributes?.url}`} alt="brands"/>
              </div>

            </div>

          </div>
        </div>
    </section>
  )
}

export default Guarant