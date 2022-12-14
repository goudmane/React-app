import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`

    ${variables};
    ${fonts};


            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');

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
        height: 37px;
        width: 60px;
        float: left;
        margin: 0 5px;
        overflow: hidden;
        background: #fff;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease-out;
        border-radius: 80px;
        background: transparent;
        color: rgb(48, 49, 137);
        border: unset;
        transform: scaleX(1);
        position: relative;
        right: 10px;
      }
      .wrapper .button:hover{
        width: 104px;
        background: rgba(48, 49, 137, 0.2);
      }
      .wrapper .button .icon{
        display: inline-block;
        height: 100%;
        width: 30px;
        text-align: center;
        border-radius: 50px;
        box-sizing: border-box;
        line-height: 36px;
        transition: all 0.3s ease-out 0s;;
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
        margin-left: 10px;
        transition: all 0.3s ease-out 0s;
        text-align: left;
        font: normal normal normal 14px/19px Roboto;
        letter-spacing: 0px;
        color: #303189;
      }
    /* Footer */
`;

export default GlobalStyle;


