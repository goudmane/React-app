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
import Slider from "react-slick";

export default class Section2 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src="https://picsum.photos/196/262"/>
          </div>
          <div>
            <img src="https://picsum.photos/196/262"/>
          </div>
          <div>
            <img src="https://picsum.photos/196/262"/>
          </div>
          <div>
            <img src="https://picsum.photos/196/262"/>
          </div>
          <div>
            <img src="https://picsum.photos/196/262"/>
          </div>
          <div>
            <img src="https://picsum.photos/196/262"/>
          </div>
        </Slider>
      </div>
    );
  }
}
