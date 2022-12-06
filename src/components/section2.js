
import React, { Component } from "react";

import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import RoundedBtn from "./roundedBtn"

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
        <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
            selectedAttraction= '0.2'
            friction= '0.8'
        >
            <div class="carousel-cell"><img src="https://placeimg.com/640/480/animals" /></div>
            <div class="carousel-cell"><img src="https://placeimg.com/640/480/animals" /></div>
            <div class="carousel-cell"><img src="https://placeimg.com/640/480/animals" /></div>
            <div class="carousel-cell"><img src="https://placeimg.com/640/480/animals" /></div>
            <div class="carousel-cell"><img src="https://placeimg.com/640/480/animals" /></div>
        </Flickity>

        <RoundedBtn marginStyle="{margin: '35px 50px 52px 50px;'}" text="Voir tous les événements" />
      </div>
    );
  }
}
