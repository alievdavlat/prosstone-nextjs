import React from 'react'

type Props = {
  imgUrl:string;
  setShowPopup:(showZoomPopup:boolean) => void
}

const ZoomImage:React.FC<Props> = ({imgUrl, setShowPopup}) => { 

  const hanldeClose = (e:any) => {
    if (e.target.id === 'zoom-popup' || e.target.id === 'zoom-popup__close') {
      setShowPopup(false)
    }

  }


  return (
     <div className="zoom-popup" id='zoom-popup' onClick={hanldeClose}>
      <svg onClick={hanldeClose} id='zoom-popup__close' className="zoom-popup__close" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5237 10.6259L19.8274 18.9295L18.9125 19.8445L10.6088 11.5408L1.92532 20.2243L0.975834 19.2748L9.6593 10.5914L1.68363 2.61569L2.59859 1.70073L10.5743 9.67639L19.275 0.975667L20.2245 1.92515L11.5237 10.6259Z" fill="black"/>
      </svg>
      <img src={imgUrl} alt="img" />
    </div>
  )
}

export default ZoomImage