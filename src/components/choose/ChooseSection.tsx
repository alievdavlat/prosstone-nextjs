// @ts-nocheck
import axios from 'axios'
import React from 'react'

type Props = {}

const ChooseSection = (props: Props) => {

  const [choosesData, setChoosesData] = React.useState([])

  React.useEffect(() => {
    const getChooses  = async () => {
      const chooseRes = await axios.get(`http://localhost:1337/api/chooses?populate=*`)
      setChoosesData(chooseRes?.data?.data)
    }    
    getChooses()
  }, [])

  
return (
    <section className="choose" id="choose">
      <div className="container">
        <div className="choose-wrap">
          <h2 className="section-title">
            За что нас <strong>выбирают</strong>?
          </h2>

          <div className="choose_content">
            	
            
            
          {
            choosesData?.map(item  => (
              <div className="choose_content-item" key={item.id}>
              <div className="choose_content-item__title">
                {item?.attributes?.title}
              </div>
              <p className="choose_content-item__text">
                {item?.attributes?.description}
              </p>
              <div className="choose_content-item_icon">
                <img src={`http://localhost:1337${item?.attributes?.icon?.data?.attributes?.url}`} alt="ico"/>
              </div>
            </div>
            ))
          }

          </div>


        </div>
      </div>
    </section>
  )
}

export default ChooseSection