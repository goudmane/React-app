
import React, { Component } from "react";

import RoundedBtn from "./roundedBtn";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import sliderImg from '@images/s2.png';


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
    const roundedBtnStyle = {
        margin: '50px 50px 42px 50px'
    }

    return (
      <div id="section2">
        <h3 style={h3style}>ÉVÉNEMENTS TENDANCE</h3>

            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                loop= {true}
                spaceBetween={20}
                className="mySwiper">
                <SwiperSlide><img src={sliderImg} /></SwiperSlide>
                <SwiperSlide><img src={sliderImg} /></SwiperSlide>
                <SwiperSlide><img src={sliderImg} /></SwiperSlide>
                <SwiperSlide><img src={sliderImg} /></SwiperSlide>
            </Swiper>

        <RoundedBtn containerStyle={roundedBtnStyle} BtnStyle={null} text="Voir tous les événements" />


      </div>
    );
  }
}
