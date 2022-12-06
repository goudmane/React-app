
import React, { Component } from "react";

import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import RoundedBtn from "./roundedBtn";

import { Swiper, SwiperSlide } from "swiper/react";

// eslint-disable-next-line
import "swiper/css/bundle";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, {
    Pagination
  } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Pagination]);
export default class Section2 extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      slidesToShow: 3,

    };
    const h3style = {
        marginBottom: "49px",
        marginTop: "52px",
        color: 'var(--main-bleu)',

        lineHeight: '33px',
        textAlign: 'center',
        fontSize: '25px',
        letterSpacing: '0.5px',
        textTransform: 'uppercase'
    }

    const flickityOptions = {
        freeScroll: true,
        wrapAround: true
    }

    return (
      <div id="section2">
        <h3 style={h3style}>THE PLACE TO BE</h3>
        {/* <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}

        >
            <div class="carousel-cell"><img src="https://placeimg.com/640/480/animals" /></div>
            <div class="carousel-cell"><img src="https://placeimg.com/640/480/animals" /></div>
            <div class="carousel-cell"><img src="https://placeimg.com/640/480/animals" /></div>
            <div class="carousel-cell"><img src="https://placeimg.com/640/480/animals" /></div>
            <div class="carousel-cell"><img src="https://placeimg.com/640/480/animals" /></div>
        </Flickity> */}
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                loop= {true}
                spaceBetween={30}
                pagination={{"clickable": true}}
                className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>

        <RoundedBtn marginStyle={{margin: '50px 50px 42px 50px;'}} text="Voir tous les événements" />
      </div>
    );
  }
}
