import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';
import TransitionStyles from './TransitionStyles';
import PrismStyles from './PrismStyles';

const GlobalStyle = createGlobalStyle`
  ${fonts};
  // Carousel CSS 
  .multi-item-carousel {
    overflow: hidden;
  }
  
  .multi-item-carousel .carousel-indicators {
    margin-right: 25%;
    margin-left: 25%;
  }
  
  .multi-item-carousel .carousel-control-prev,
  .multi-item-carousel .carousel-control-next {
    background: rgba(255, 255, 255, 0.3);
    width: 25%;
    z-index: 11;
    /* .carousel-caption has z-index 10 */
  }
  
  .multi-item-carousel .carousel-inner {
    width: 150%;
    left: -25%;
  }
  
  .multi-item-carousel .carousel-item-next:not(.carousel-item-left),
  .multi-item-carousel .carousel-item-right.active {
    -webkit-transform: translate3d(33%, 0, 0);
    transform: translate3d(33%, 0, 0);
  }
  
  .multi-item-carousel .carousel-item-prev:not(.carousel-item-right),
  .multi-item-carousel .carousel-item-left.active {
    -webkit-transform: translate3d(-33%, 0, 0);
    transform: translate3d(-33%, 0, 0);
  }
  
  .multi-item-carousel .item__third {
    float: left;
    position: relative;
    width: 33.33333333%;
  }
  
  .multi-item-carousel img {
    width: 33.333333%;
    height: 50vh;
    max-height: 50vh;
    object-fit: cover;
  }
`;

export default GlobalStyle;
