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
    .BtnActive:hover,.BtnActive:active{
        background-color: var(--main-bleu)!important;
        border-color: var(--main-bleu)!important;
        color: var(--bs-btn-active-color)!important;
    }
    .logoTxt {
        font-size: 30px;
        font-weight: 400;
        font-family: HelveticaNeue;
    }

    #section2.flickity-enabled.is-draggable {

        width: 100vw;
        left: -20px;
    }

    .carousel-cell {
        display: flex;
        z-index: 5;
        margin-top: 16px;
        width: 172px !important;
        height: 230px;
    }

    .carousel-cell.is-selected {
        z-index: 50;
        margin-top: 0;
        /* width: 196px !important;
        height: 262px; */
    }

    .carousel-cell > img {
        width: 172px !important;
        height: 230px;
    }
    .carousel-cell.is-selected>img{
        /* background: #ED2; */

    }

    .category-carousel-cell {
        height: 300px;
        width: 100%;
    }

    .category-carousel-cell.is-selected {

    }

    .category-carousel-cell > img {
        height: 300px;
        width: 100%;
    }
    .category-carousel-cell.is-selected>img{
        /* background: #ED2; */

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
`;

export default GlobalStyle;
