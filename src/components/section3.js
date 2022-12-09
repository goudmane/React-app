import * as React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image'

import RoundedBtn from "./roundedBtn";
import { graphql, useStaticQuery } from 'gatsby'

import sliderImg from '@images/s3.png';
//simport _CSS from '@utils/style.js';

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
        bottom: '180px',
        background: 'transparent linear-gradient(180deg, #00000000 0%, #000000 100%) 0% 0% no-repeat padding-box',
        borderRadius: '5px',
        paddingBottom: '38px'
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
    const sliderBtnStyle = {
        wordSpacing: '-3px',
        width: '146px',
        height: '40px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '30px',
        border: 'unset',
        font: 'normal normal 500 18px/24px Roboto',
        letterSpacing: '0px',
        color: '#303189',
        textAlign: 'center',
        padding: '4px  6px  0px  0px'
    }
    const sliderBtnDivStyle = {
        width: '100%',
        textAlign: 'center',
        height: '40px',
        paddingTop: '2px'
    }
    const BtnSmallDiv = {
        wordSpacing: '-3px',
        position: 'absolute',
        width: '100%',
        height: '40px',
        left: '0',
        right: '0',
        bottom: '241.5px',
        opacity: '1',
        textAlign: 'right',
        border: 'unset',
        padding: '0px 20px 0px 0px'
    }
    const BtnSmall = {
        border: 'unset',
        width: '94px',
        height: '40px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '30px',
        textAlign: 'left',
        font: 'normal normal bold 14px/19px Roboto',
        letterSpacing: '-0.28px',
        color: '#303189',
        opacity: '1',
        padding: '3px 0px 0px 15px'
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


            <Swiper className="section3Swiper"
                    pagination={pagination}
                    modules={[Pagination]}
            >
                <SwiperSlide className="section3Slider">
                    <img src={sliderImg} rounded />
                    <div style={sliderTxtConainerStyle}>
                        <div style={sliderTxtTitleStyle}>D’ANFAPLACE ?</div>
                        <div style={sliderTxtTitleStyle}>QUE PENSEZ-VOUS</div>
                        <p style={sliderTxtParagraphStyle}>Igitur nominum nominum ob epigonus molitioni </p>
                        <div>
                            <RoundedBtn containerStyle={sliderBtnDivStyle} BtnStyle={sliderBtnStyle} text="Je participe" />
                            <RoundedBtn containerStyle={BtnSmallDiv} BtnStyle={BtnSmall} text="100 points" />
                        </div>
                    </div>
                </SwiperSlide>

             </Swiper>




        </div>
    )
}

export default Section1
