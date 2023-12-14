import React from 'react'
import { productsData } from '@/constants'
import './products.css'
import { ProductsItem } from '..'




const Products = () => {

  

  return (
    <div className='container'>

        <div className="products">

          <h1 className='products-title section-title'>
            {productsData?.title.slice(0, 5)} <strong>{productsData?.title.slice(5, 24)}</strong> <br /> 
            <strong>
              {productsData?.title.slice(24)}
            </strong>
          </h1>
          

          <div className="products-gallery">
            {
              productsData?.products.map((item , index) => (
                <ProductsItem {...item} key={item?.id}  index={index} />
              ))
            }
          </div>
        </div>

    </div>
  )
}

export default Products