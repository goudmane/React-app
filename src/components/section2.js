/*
import * as React from 'react'
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

function Section2() {
  return (
    <Slider {...settings}>
    <div>
        <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
    <div>
      <h3>5</h3>
    </div>
    <div>
      <h3>6</h3>
    </div>
  </Slider>
  );
}

export default Section2;
 */
import React, { Component } from "react";
/* import Flickity from 'flickity'; */

import Flickity from "react-flickity-component";

import "../styles.css";
import "flickity/css/flickity.css";
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
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    };
    return (
      <div>
        <Flickity>
          <img src="https://placeimg.com/640/480/animals" />
          <img src="https://placeimg.com/640/480/animals" />
        </Flickity>
      </div>
    );
  }
}
