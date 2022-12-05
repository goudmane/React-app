
import React, { Component } from "react";

import Flickity from "react-flickity-component";

/* import "../styles.css"; */
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

    };

    const flickityOptions = {
        freeScroll: true,
        wrapAround: true
    }

    return (
      <div>
        <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
        >
            <div class="carousel-cell"><img src="https://placeimg.com/640/480/animals" /></div>
            <div class="carousel-cell"><img src="https://placeimg.com/640/480/animals" /></div>
            <div class="carousel-cell"><img src="https://placeimg.com/640/480/animals" /></div>
            <div class="carousel-cell"><img src="https://placeimg.com/640/480/animals" /></div>
            <div class="carousel-cell"><img src="https://placeimg.com/640/480/animals" /></div>
        </Flickity>
      </div>
    );
  }
}
