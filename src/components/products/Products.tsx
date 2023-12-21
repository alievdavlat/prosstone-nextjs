//@ts-nocheck
import React from 'react'
import { productsData } from '@/constants'
import { ProductsItem } from '..'
import axios from 'axios'


type Props = {
  setshowFeedback:(showFeedback:boolean) => void;
}

const Products:React.FC<Props> = ({setshowFeedback}) => {

  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(`http://localhost:1337/api/products?populate=*`)

      setProducts(response?.data?.data)
    }

    getProduct()
    }, [])
  

  return (
    <section className="products" id="products">
  <div className="container">
    <h2 className="products-title section-title">
      НАША
      <strong>
        ВЫСОКОКАЧЕСТВЕННАЯ <br /> ПРОДУКЦИЯ
      </strong>
    </h2>
    <div className="products-content">
      {
        products.map((item, index) => (
      <div  key={item.id} className={`products-content_item  ${index === 0 || index === 5 || index === 6 ?  'products-content_item-big' : ''}`}>
        <div className="products-content_item__img">
          <img src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}`} alt="product" />
        </div>
        <div className="products-content_item__name">{item?.attributes.title}</div>
        <a href="#" className="products-content_item__btn feedback-open" onClick={() => setshowFeedback(true)}>
          Узнать цену
        </a>
      </div>
        ))
      }
    </div>
  </div>
</section>

  )
}

export default Products