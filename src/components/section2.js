
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
