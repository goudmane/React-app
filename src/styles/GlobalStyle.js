import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`

    ${variables};
    ${fonts};

    body {
        margin: 0px 20px;

    }
    header svg {
        color: var(--main-bleu);
    }
    .w-100.btn-group.btn-group-lg:first-child {
        background-color: var(--main-bleu);
        border-color: var(--main-bleu);
        color: var(--bs-btn-active-color);
    }
    .BtnActive{
        background-color: var(--main-bleu);
        border-color: var(--main-bleu);
        color: var(--bs-btn-active-color);
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
        font-weight: 300;
        font-family: sans-serif,HelveticaNeue;
        margin-left: 48px;
    }
    #section1,#section2,#section3 {
        margin: auto;
        max-width: 414;
    }
    #section1 {
        margin-top: 30px;
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
    #section1 .section1Swiper {
        margin-bottom: 35px;
    }
    #section1 .section1Swiper div.section1Slider {
        height: 300px;
        width: 100%;
        border-radius: 5px !important;
    }
    #section1 .section1Swiper div.section1Slider  > img {
        height: 300px;
        width: 100%;
        border-radius: 5px !important;
    }
    .QUEST-carousel-cell {
        height: 300px;
        width: 100%;

    }

    .QUEST-carousel-cell > img {
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


    /* Section 2 */
    #section2 .swiper {
        width: 100vw;
        height: 100%;
        max-width: 414px;
        margin: auto;
        left: -20px;
    }

    #section2 .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

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

    #section2 .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px !important;
    }

    #section2 .swiper-slide {
        width: 172.3px !important;
        height: 230px;
        margin-top: 16px;
    }
    #section2 .swiper-slide.swiper-slide-active {
        margin-top: 0;
        width: 196.7px !important;
        height: 262px;
    }
    /* Section 2 */

`;

export default GlobalStyle;


