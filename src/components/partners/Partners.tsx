//@ts-nocheck
import axios from 'axios'
import React from 'react'


const Partners = () => {

  const [partners, setPartners] = React.useState([])

  React.useEffect(() => {
    const getPartners =  async () => {
      const response =  await axios.get(`http://localhost:1337/api/partners?populate=*`)

      setPartners(response?.data?.data)
    }

    getPartners()

  }, [])

  

return (
<section className="partners">
  <div className="container">
    <h2 className=" section-title">
      нам <strong>доверяют</strong>
      <span>172+</span>
    </h2>
    <div className="partners-wrap">

      {
        partners?.map((item) => (
          <div className="partners-item">
          <img src={`http://localhost:1337${item?.attributes?.logo?.data?.attributes?.url}`} alt="partners" />
        </div>
        ))
      }
    </div>
  </div>
</section>
  )
}

export default Partners