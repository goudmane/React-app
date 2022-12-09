import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`

    ${variables};
    ${fonts};

    body {
        margin: 0px 20px;
        margin-bottom: 70px;
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
        background-color: var(--main-bleu) !important;;
        border-color: var(--main-bleu) !important;;
        color: var(--bs-btn-active-color) !important;;
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

    .swiper-pagination-costume {
        width: 30px !important;
        height: 2px !important;
        border-radius: 0px !important;
        background: #ffffffb8 !important;
        position: relative;
        left: 9px;
        margin: 0px 19px 0px -2px !important;
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
    /* Section 3 */
    #section3 .section3Swiper {
        height:300px;
    }
    /* Section 3 */
    /* Section 4 */
    .col-6 {
        height: 82px;
    }
    /* Section 4 */

    /* Footer */
    .wrapper .button{
        display: inline-block;
        height: 60px;
        width: 60px;
        float: left;
        margin: 0 5px;
        overflow: hidden;
        background: #fff;
        border-radius: 50px;
        cursor: pointer;
        box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
        transition: all 0.3s ease-out;
      }
      .wrapper .button:hover{
        width: 200px;
      }
      .wrapper .button .icon{
        display: inline-block;
        height: 60px;
        width: 60px;
        text-align: center;
        border-radius: 50px;
        box-sizing: border-box;
        line-height: 60px;
        transition: all 0.3s ease-out;
      }
      .wrapper .button:nth-child(1):hover .icon{
        background: #4267B2;
      }
      .wrapper .button:nth-child(2):hover .icon{
        background: #1DA1F2;
      }
      .wrapper .button:nth-child(3):hover .icon{
        background: #E1306C;
      }
      .wrapper .button:nth-child(4):hover .icon{
        background: #333;
      }
      .wrapper .button:nth-child(5):hover .icon{
        background: #ff0000;
      }
      .wrapper .button .icon i{
        font-size: 25px;
        line-height: 60px;
        transition: all 0.3s ease-out;
      }
      .wrapper .button:hover .icon i{
        color: #fff;
      }
      .wrapper .button span{
        font-size: 20px;
        font-weight: 500;
        line-height: 60px;
        margin-left: 10px;
        transition: all 0.3s ease-out;
      }
      .wrapper .button:nth-child(1) span{
        color: #4267B2;
      }
      .wrapper .button:nth-child(2) span{
        color: #1DA1F2;
      }
      .wrapper .button:nth-child(3) span{
        color: #E1306C;
      }
      .wrapper .button:nth-child(4) span{
        color: #333;
      }
      .wrapper .button:nth-child(5) span{
        color: #ff0000;
      }
    /* Footer */
`;

export default GlobalStyle;


