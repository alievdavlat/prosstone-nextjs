// @ts-nocheck
import { projectsData } from '@/constants'
import React, { useEffect } from 'react'
import { ProjectsItem } from '..'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination , Autoplay} from 'swiper/modules';

import arrowLeft from '../../assets/img/arrow-left.svg'
import arrowRight from '../../assets/img/arrow-right.svg'
import zoommIcon from '../../assets/img/zoom.svg'

type Props = {
  setshowFeedback:(showFeedback:boolean) => void;
}


const Projects:React.FC<Props> = ({setshowFeedback}) => {
  const [projects, setProjects] = React.useState([])
  const [swiperRef, setSwiperRef] = React.useState(null);


  const prevHandler = () => {
    swiperRef.slidePrev();
};

const nextHandler = () => {
    swiperRef.slideNext();
};


  useEffect(() => {

    const getProjects =  async() => {
      const response  = await axios.get(`http://localhost:1337/api/projects?populate=*`)
      setProjects(response?.data?.data)
    }
    getProjects()
  }, [])

  

  return (
    <section className="projects" id="projects">
  <div className="container">
    <div className="projects-wrapp">
      <div className="projects-header">
        <h2 className="section-title">
          2744+ <strong>реализованных проектов</strong>
        </h2>
        <div className="carousel-arrows">
          <span className="arrow-left" onClick={prevHandler}>
            <img src={arrowLeft?.src} alt="ico" />
          </span>
          <span className="arrow-right" onClick={nextHandler}>
            <img src={arrowRight?.src} alt="ico" />
          </span>
        </div>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        speed={2000}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[FreeMode, Pagination, Autoplay]}
        className="projects-content"
        breakpoints={{
          380: {
              slidesPerView: 1.3,
              spaceBetween: 20,
          },
          640: {
              slidesPerView: 1,
              spaceBetween: 20,
          },
          768: {
              slidesPerView: 1,
              spaceBetween: 30,
          },
          992: {
              slidesPerView: 2,
              spaceBetween: 30,
          },
          1024: {
              slidesPerView: 2,
              spaceBetween: 30,
          },
      }}

      >
        {
          projects.map((item) => (
          <SwiperSlide  key={item?.id}>
             <ProjectsItem 
              setshowFeedback={setshowFeedback}
              year={item?.attributes?.year}
              address={item?.attributes?.address}
              color={item?.attributes?.color}
              image={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}`}
              material={item?.attributes?.material}
              size={item?.attributes?.size}
              title={item.attributes?.title}
              zoomIcon={zoommIcon.src}
            />
          </SwiperSlide>
          ))
        }
        
      </Swiper>
      
    </div>
  </div>
</section>

  )
}

export default Projects