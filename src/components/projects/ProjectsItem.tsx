import React from 'react'

type Props = {
  id?:number;
  image:string;
  address:string;
  title:string;
  material:string;
  color:string;
  size:string;
  year:string;
  zoomIcon:any
  setshowFeedback:any
  setShowPopup:(showZoomPopup:boolean) => void;
  setImgUrl:(imgUrl:string) => void;
}

const ProjectsItem:React.FC<Props> = ({setshowFeedback, address, color,image, material, size, title, year, zoomIcon, setImgUrl, setShowPopup}) => {
  const hanldeZoomClick = (img:string) => {
    setImgUrl(img)
    setShowPopup(true)
  }
  

  
  return (
    <div className="projects-content_item">
    <div className="projects-content_item__img">
      <img src={image} alt="ico" />
    </div>
    <div className="projects-content_item__header">
      <div className="projects-content_item__header-location">
        {address}
      </div>
      <div className="projects-content_item__header-zoom" >
        <img src={zoomIcon} alt="zoom-image"  onClick={() => hanldeZoomClick(image)}/>
      </div>
    </div>
    <h3 className="projects-content_item__name">
      {title}
    </h3>
    <ul className="projects-content_item__list">
      <li>
        <span>Материал:</span>
        <span>{material}</span>
      </li>
      <li>
        <span>Цвет камня:</span>
        <span>{color}</span>
      </li>
      <li>
        <span>Площадь:</span>
        <span>{size}</span>
      </li>
      <li>
        <span>Год:</span>
        <span>{year}</span>
      </li>
    </ul>
    <button className="projects-content_item__btn feedback-open" onClick={() => setshowFeedback(true)}>
      Хочу также
    </button>
  </div>
  )
}

export default ProjectsItem