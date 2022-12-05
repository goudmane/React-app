import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${fonts};
    body {
        margin : 10pt 20pt;
    }

    .flickity-enabled.is-draggable {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        user-select: none;
        width: 100vw;
        left: -20px;
    }

    .carousel-cell {
        display: flex;
        z-index: 5;
        margin-top: 16px;
      }

    .carousel-cell.is-selected {
        z-index: 50;
        margin-top: 0;
    }

    .carousel-cell > img {
        width: 172px !important;
        height: 230px;
    }
    .carousel-cell.is-selected>img{
        /* background: #ED2; */
        width: 196px !important;
        height: 262px;
    }
`;

export default GlobalStyle;
