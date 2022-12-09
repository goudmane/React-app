
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


    const sliderTxtConainerStyle = {
        textAlign: 'center',
        position: 'relative',
        bottom: '83px',
        background: 'transparent linear-gradient(180deg, #00000000 0%, #000000 100%) 0% 0% no-repeat padding-box',
        paddingBottom: '13px',
        borderRadius: '0px 0px 5px 5px',
        paddingLeft: '4px'
    }
    const sliderTxtTitleStyle = {
        letterSpacing: '0.8px',
        font: 'normal normal bold 25px/33px Roboto',
        textTransform: 'uppercase',
        color: '#FFFFFF'
    }
    const sliderTxtParagraphStyle = {
        textAlign: 'center',
        font: 'normal normal normal 16px/21px Roboto',
        color: '#FFFFFF',
        opacity: '1',
        letterSpacing: '-0.3px',
        marginRight: '5px'
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
                <SwiperSlide>
                    <img src={sliderImg} />
                    <div style={sliderTxtConainerStyle}>
                        <div style={sliderTxtTitleStyle}>LOREM IPSUM</div>
                        <p style={sliderTxtParagraphStyle}>www.anfaplacemall.ma</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src={sliderImg} /></SwiperSlide>
                <SwiperSlide><img src={sliderImg} /></SwiperSlide>
                <SwiperSlide><img src={sliderImg} /></SwiperSlide>
            </Swiper>

        <RoundedBtn containerStyle={roundedBtnStyle} BtnStyle={null} text="Voir tous les événements" />


      </div>
    );
  }
}
