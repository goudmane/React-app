import * as React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image'

import RoundedBtn from "./roundedBtn";
import { graphql, useStaticQuery } from 'gatsby'

import sliderImg from '@images/s3.png';


import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

const Section1 = ({ title }) => {
    const h3style = {
        marginBottom: "53px",
        marginTop: "42px",
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
    const QUESTGpBtnStyle = {
        backgroundColor: '#FAFAFA',
        borderRadius: '30px',
        boxShadow: '#00000033 0px 1px 4px'
    }
    const BtnStyle = {
        borderRadius: '30px',
        width: '100%',
        background: 'var(--main-bleu)',
        height: '45px'

    }
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    const flickityOptions = {
        freeScroll: true,
        wrapAround: true
    }

    return (
        <div id='section3'>

            <h3 style={h3style}>QUESTIONNAIRES</h3>


            <Swiper className="section1Swiper"
                    pagination={pagination}
                    modules={[Pagination]}
            >
                <SwiperSlide className="section1Slider">
                    <img src={sliderImg} rounded />
                    <div style={sliderTxtConainerStyle}>
                        <div style={sliderTxtTitleStyle}>ANFAPLACE MALL</div>
                        <p style={sliderTxtParagraphStyle}>www.anfaplacemall.ma</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="section1Slider">
                    <img src={sliderImg} rounded />
                    <div style={sliderTxtConainerStyle}>
                        <div style={sliderTxtTitleStyle}>ANFAPLACE MALL</div>
                        <p style={sliderTxtParagraphStyle}>www.anfaplacemall.ma</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="section1Slider">
                    <img src={sliderImg} rounded />
                    <div style={sliderTxtConainerStyle}>
                        <div style={sliderTxtTitleStyle}>ANFAPLACE MALL</div>
                        <p style={sliderTxtParagraphStyle}>www.anfaplacemall.ma</p>
                    </div>
                </SwiperSlide>
             </Swiper>




        </div>
    )
}

export default Section1
