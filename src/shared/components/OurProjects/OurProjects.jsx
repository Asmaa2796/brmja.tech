import './OurProjects.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
const OurProjects = () => {
    return (
      <div className="our_projects text-center" id="our_projects">
        <div className="container">
          <h1 className="text-secondary">أهم</h1>
          <h2 className="fw-bold mb-4">مشاريعنا</h2>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              320: { slidesPerView: 2 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 8 },
            }}
            loop
          >
            <SwiperSlide>
              <div className="slider_image">
                <img src="/projects/5.png" alt="--" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_image">
                <img src="/projects/6.png" alt="--" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_image">
                <img src="/projects/7.png" alt="--" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_image">
                <img src="/projects/8.png" alt="--" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_image">
                <img src="/projects/9.png" alt="--" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_image">
                <img src="/projects/10.png" alt="--" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_image">
                <img src="/projects/11.png" alt="--" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_image">
                <img src="/projects/12.jpg" alt="--" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_image">
                <img src="/projects/13.png" alt="--" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_image">
                <img src="/projects/14.png" alt="--" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_image">
                <img src="/projects/15.png" alt="--" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider_image">
                <img src="/projects/16.png" alt="--" />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className='text-center my-3'>
            <Link className='all_projects shadow-sm fw-bold' to="/all_projects">كل المشاريع <FaArrowLeftLong /></Link>
          </div>
        </div>
      </div>
    );
}

export default OurProjects;
