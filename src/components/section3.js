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
    const sliderTxtConainerStyle = {
        textAlign: 'center',
        position: 'relative',
        bottom: '147px',
        background: 'transparent linear-gradient(180deg, #00000000 0%, #000000 100%) 0% 0% no-repeat padding-box',
        borderRadius: '0px 0px 5px 5px',
        opacity: '1',
        paddingBottom: '80px'
    }
    const sliderTxtTitleStyle = {
        letterSpacing: '0.5px',
        font: 'normal normal bold 25px/33px Roboto',
        textTransform: 'uppercase',
        color: '#FFFFFF'
    }
    const sliderTxtParagraphStyle = {
        textAlign: 'center',
        font: 'normal normal normal 14px/19px Roboto',
        letterSpacing: '0px',
        color: '#FFFFFF',
        opacity: '1'
    }
    const sliderBtnhStyle = {
        wordSpacing: '-3px',
        position: 'absolute',
        width: '145px',
        height: '40px',
        left: '0',
        right: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        top: '70.5px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '30px',
        font: 'normal normal 500 18px/24px Roboto',
        letterSpacing: '0.5px',
        color: '#303189',
        opacity: '1',
        textAlign: 'center',
        border: 'unset'
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
    const pagination = {
        clickable: false,
        renderBullet: function (index, className) {
            return '<span class="'+className+' swiper-pagination-costume">' + "</span>";
        },
    };

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
                        <div style={sliderTxtTitleStyle}>D’ANFAPLACE ?</div>
                        <div style={sliderTxtTitleStyle}>QUE PENSEZ-VOUS D’ANFAPLACE ?</div>
                        <p style={sliderTxtParagraphStyle}>Igitur nominum nominum ob epigonus molitioni </p>
                        <p style={sliderTxtParagraphStyle}>oppressi pollicitos vivendi ob. </p>
                        <div>
                            <RoundedBtn marginStyle={sliderBtnhStyle} text="Je participe" />
                            {/* x */} css.btn-small-promo */
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="section1Slider">
                    <img src={sliderImg} rounded />
                    <div style={sliderTxtConainerStyle}>
                        <div style={sliderTxtTitleStyle}>QUE PENSEZ-VOUS D’ANFAPLACE ?</div>
                        <p style={sliderTxtParagraphStyle}>Igitur nominum nominum ob epigonus molitioni oppressi pollicitos vivendi ob.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="section1Slider">
                    <img src={sliderImg} rounded />
                    <div style={sliderTxtConainerStyle}>
                        <div style={sliderTxtTitleStyle}>QUE PENSEZ-VOUS D’ANFAPLACE ?</div>
                        <p style={sliderTxtParagraphStyle}>Igitur nominum nominum ob epigonus molitioni oppressi pollicitos vivendi ob.</p>
                    </div>
                </SwiperSlide>
             </Swiper>




        </div>
    )
}

export default Section1
