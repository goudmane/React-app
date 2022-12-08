
import React, { Component } from "react";

import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img1 from '@images/s4-1.png';
import img2 from '@images/s4-2.svg';
import img3 from '@images/s4-3.png';
import img4 from '@images/s4-4.png';
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
        marginTop: '-12px',
        color: 'var(--main-bleu)',
        lineHeight: '33px',
        textAlign: 'center',
        fontSize: '25px',
        letterSpacing: '1.8px',
        textTransform: 'uppercase',
        fontFamily: '\'Roboto\'',
        fontWeight: '900',
        marginLeft: '17px'
    }






    return (
      <div id="section4">
        <h3 style={h3style}>NOS MARQUES</h3>

        <Container>
            <Row>
                <Col bsPrefix='6'><img style={{
                    position: 'relative',
                    bottom: '50px'
                }} src={img1} rounded /></Col>
                <Col><img style={{
                    position: 'relative',
                    bottom: '-20px',
                    left: '21px'
                }} src={img2} rounded /></Col>
                <Col><img style={{
                    position: 'relative',
                    bottom: '-24px',
                    left: '2px'
                }} src={img3} rounded /></Col>
                <Col><img style={{
                    position: 'relative',
                    bottom: '-15px',
                    left: '30px'
                }} src={img4} rounded /></Col>
            </Row>
        </Container>

      </div>
    );
  }
}
