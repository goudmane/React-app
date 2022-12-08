
import React, { Component } from "react";

import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import RoundedBtn from "./roundedBtn";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/grid";

export default class Section4 extends Component {

  render() {

    const h3style = {
        marginBottom: '50px',
        marginTop: '42px',
        color: 'var(--main-bleu)',
        lineHeight: '33px',
        textAlign: 'center',
        fontSize: '25px',
        letterSpacing: '1.8px',
        textTransform: 'uppercase',
        fontFamily: '\'Roboto\'',
        fontWeight: '900',
        marginLeft: '20px'
    }


    return (
      <div id="section2">
        <h3 style={h3style}>NOS MARQUES</h3>
        {/* <Swiper
            slidesPerView={2}
            grid={{
                rows: 2,
              }}
            centeredSlides={false}
            loop= {true}
            spaceBetween={20}
            className="mySwiper">
            <SwiperSlide><img src="https://placeimg.com/640/480/animals" /></SwiperSlide>
            <SwiperSlide><img src="https://placeimg.com/640/480/animals" /></SwiperSlide>
            <SwiperSlide><img src="https://placeimg.com/640/480/animals" /></SwiperSlide>
            <SwiperSlide><img src="https://placeimg.com/640/480/animals" /></SwiperSlide>
            <SwiperSlide><img src="https://placeimg.com/640/480/animals" /></SwiperSlide>
            <SwiperSlide><img src="https://placeimg.com/640/480/animals" /></SwiperSlide>
            <SwiperSlide><img src="https://placeimg.com/640/480/animals" /></SwiperSlide>
            <SwiperSlide><img src="https://placeimg.com/640/480/animals" /></SwiperSlide>
            <SwiperSlide><img src="https://placeimg.com/640/480/animals" /></SwiperSlide>
        </Swiper> */}

      </div>
    );
  }
}
