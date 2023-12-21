//@ts-nocheck
import axios from 'axios'
import React from 'react'
import arrowLeft from '../../assets/img/arrow-left.svg'
import arrowRight from '../../assets/img/arrow-right.svg'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination , Autoplay} from 'swiper/modules';
import { ReviewsItem } from '..';



type Props = {}

const Reviews = (props: Props) => {

  const [reviews, setReviews] = React.useState([])
  const [swiperRef, setSwiperRef] = React.useState(null);


  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };



  React.useEffect(() => {
    const getReviews = async () => {
      const response = await axios.get(`http://localhost:1337/api/reviews?populate=*`)
      setReviews(response?.data?.data)
    }
    getReviews()
  }, [])

  return (
    <section className="reviews">
    <div className="container">
      <div className="reviews-wrapp">
        <div className="reviews_header">
          <h2 className="section-title">
            Отзывы наших <strong>довольных клиентов</strong>
          </h2>
          <div className="carousel-arrows">
            <span className="arrow-left" onClick={prevHandler}>
              <img src={arrowLeft.src} alt="ico" />
            </span>
            <span className="arrow-right" onClick={nextHandler}>
              <img src={arrowRight.src} alt="ico" />
            </span>
          </div>
        </div>
        <Swiper
        slidesPerView={1}
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
        className="reviews-content"
      >
         {
          reviews?.map((item) => (
          <SwiperSlide  key={item?.id}>
            <ReviewsItem
              client_name={item?.attributes?.client_name}
              comment={item?.attributes?.comment}
              image={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}`}
              stars={item?.attributes?.stars}
              client_avatar={`http://localhost:1337${item?.attributes?.client_avatar?.data?.attributes?.url}`}
              whereIsWrite={item?.attributes?.whereIsWrite}
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

export default Reviews