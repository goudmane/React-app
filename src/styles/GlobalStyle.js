import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`

    ${variables};
    ${fonts};

    body {
        margin : 10pt 20px;
    }
    header svg {
        color: var(--main-bleu);
    }
    .btn-group>.btn{
        background: transparent;
        width: 33.33%;
        border-radius: 30px !important;
        border: unset;
        color: #909090;
        font-size: 14px;
        font-family: Roboto,var(--bs-btn-font-family);
        line-height: 19px;
        height: 45px;
    }
    .btn-group > .btn:hover,.btn-group > .btn:active{
        background-color: var(--main-bleu)!important;
        border-color: var(--main-bleu)!important;
        color: var(--bs-btn-active-color)!important;
    }
    .logoTxt {
        font-size: 30px;
        font-weight: 700;
        font-family: HelveticaNeue;
    }

    #section2.flickity-enabled.is-draggable {

        width: 100vw;
        left: -20px;
    }

    .carousel {
        background: #FAFAFA;
      }

      .carousel-cell {
        width: 66%;
        height: 200px;
        margin-right: 10px;
        background: #8C8;
        border-radius: 5px;
        counter-increment: carousel-cell;
      }

      /* cell number */
      .carousel-cell:before {
        display: block;
        text-align: center;
        content: counter(carousel-cell);
        line-height: 200px;
        font-size: 80px;
        color: white;
      }
    .category-carousel.flickity-enabled.is-draggable {
        margin-bottom: 35px;
    }
    .category-carousel-cell {
        height: 300px;
        width: 100%;
        border-radius: 5px !important;
    }

    .category-carousel-cell.is-selected {

    }

    .category-carousel-cell > img {
        height: 300px;
        width: 100%;
        border
    }
    .category-carousel-cell.is-selected>img{
        /* background: #ED2; */

    }
    .QUEST-carousel-cell {
        height: 300px;
        width: 100%;
        border-radius: 5px !important;
    }


    /* position dots up a bit */
    #section1.flickity-page-dots {
        bottom: -22px;
    }
    /* dots are lines */
    #section1.flickity-page-dots .dot {
        height: 4px;
        width: 40px;
        margin: 0;
        border-radius: 0;
    }

    .swiper {
        width: 100vw;
        height: 100%;
        left: -20px;
      }

      .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .swiper-slide {
        width: 172px !important;
        height: 230px;
        margin-top: 16px;
        border-radius: 5px !important;
      }
      .swiper-slide.swiper-slide-active {
        margin-top: 0;
        width: 196px !important;
        height: 262px;
      }
`;

export default GlobalStyle;


