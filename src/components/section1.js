import * as React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image'

import {useState} from 'react';

import RoundedBtn from "./roundedBtn";
import { graphql, useStaticQuery } from 'gatsby'

/* import Flickity from "react-flickity-component";
import "flickity/css/flickity.css"; */

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Section1 = ({ title }) => {
    const h3style = {
        marginBottom: '47px',
        marginTop: '49px',
        color: 'var(--main-bleu)',
        lineHeight: '39px',
        fontSize: '30px',
        letterSpacing: '1.4px',
        textTransform: 'uppercase',
        fontFamily: '\'Roboto\'',
        fontWeight: '900',
        textAlign: 'center',
        marginLeft: '14.6px'
    }
    const CategoryGpBtnStyle = {
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


    const pagination = {
        clickable: false,
        renderBullet: function (index, className) {
            return '<span class='+className+'" swiper-pagination-costume">' + "</span>";
        },
    };


    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
    };
    return (
        <div id='section1'>
            <ButtonGroup size="lg" className="w-100" style={CategoryGpBtnStyle}>
                <Button className={isActive ? 'BtnActive' : ''} onClick={handleClick}>Magasins</Button>
                <Button className={isActive ? 'BtnActive' : ''} onClick={handleClick}>Restauration</Button>
                <Button className={isActive ? 'BtnActive' : ''} onClick={handleClick}>Informations</Button>
            </ButtonGroup>

            <h3 style={h3style}>THE PLACE TO BE</h3>

            <Swiper className="section1Swiper"
                    pagination={pagination}
                    modules={[Pagination]}
            >
                <SwiperSlide className="section1Slider">
                    <img src="https://placeimg.com/640/480/animals" rounded />

                </SwiperSlide>
                <SwiperSlide className="section1Slider"><img src="https://placeimg.com/640/480/animals" rounded /></SwiperSlide>
                <SwiperSlide className="section1Slider"><img src="https://placeimg.com/640/480/animals" rounded /></SwiperSlide>
                <SwiperSlide className="section1Slider"><img src="https://placeimg.com/640/480/animals" rounded /></SwiperSlide>
            </Swiper>

        <RoundedBtn marginStyle={{margin: '35px 50px 52px 50px;'}} text="Voir tous les actualites" />

        </div>
    )
}

export default Section1
