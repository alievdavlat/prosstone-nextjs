import React from 'react'

type Props = {
    id?: number;
    title: string;
    descr: string;
    icon:any
}

const ChooseItem:React.FC<Props> = ({descr, icon, title}) => {
  return (
    <div className='choose-content_item'>
      <h4>
          {title}
      </h4>
      <p>
          {descr}
      </p>

      <div>
        <img src={icon?.src} alt="icon" />
      </div>
    </div>
  )
}

export default ChooseItem