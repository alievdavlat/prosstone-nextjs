import React from 'react'

type Props = {
  
  id?: number;
  title: string;
  image:any;
  index: number;
}

const ProductsItem:React.FC<Props> = ({image,title, index, id}) => {
  
  return (
    <div className={`products-gallery_item`} style={{backgroundImage:`url(${image.src})`, width:`${index === 0 || index === 5 || index === 6 ? '49%' :'23.5%'}`}}>
      
      <div className='products-gallery_item-title'>
        <h4>
          {title}
        </h4>
      </div>

        <div className='products-gallery_item-btns'>
          <button>Узнать цену</button>
        </div>

    </div>
  )
}

export default ProductsItem