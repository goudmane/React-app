import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${fonts};


    body {
        margin : 10pt 20px;
    }

    a.logoTxt {
        font-size: 30px;
        font-weight: 400;
        font-family: HelveticaNeue;
    }

    .flickity-enabled.is-draggable {

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
`;

export default GlobalStyle;
