import React from "react";
import "./testimonials.css";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonials">
          <div className="client__avtar">
            <img src="assets/avatar1.jpg" alt="avt1" class="rounded-full" />
          </div>
          <h5 className="client_name">Ernest Achiver</h5>
          <small className="client_review">
            No prior react knowledge is required for this tutorial, as I will be
            explaining every step along the way.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client__avtar">
            <img src="assets/avatar2.jpg" alt="avt2" class="rounded-full" />
          </div>
          <h5 className="client_name">Ernest Achiver</h5>
          <small className="client_review">
            No prior react knowledge is required for this tutorial, as I will be
            explaining every step along the way.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client__avtar">
            <img src="assets/avatar3.jpg" alt="avt3" class="rounded-full" />
          </div>
          <h5 className="client_name">Ernest Achiver</h5>
          <small className="client_review">
            No prior react knowledge is required for this tutorial, as I will be
            explaining every step along the way.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client__avtar">
            <img src="assets/avatar4.jpg" alt="avt4" class="rounded-full" />
          </div>
          <h5 className="client_name">Ernest Achiver</h5>
          <small className="client_review">
            No prior react knowledge is required for this tutorial, as I will be
            explaining every step along the way.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
