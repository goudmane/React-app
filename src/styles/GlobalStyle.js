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
        /* width: 172px;
        height: 230px; */
        display: flex;
        align-content: space-around;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        z-index: 5;
        margin-top: 16px;
      }

    .carousel-cell.is-selected {
        /* height: 262px; */
        /* width: 196px !important; */
        z-index: 50;
        margin-top: 0;
    }

    .carousel-cell > img {
        width: 172px !important;
        height: 100%;
    }
    .carousel-cell.is-selected>img{
        /* background: #ED2; */
        width: 196px !important;
        height: 262px;
    }
`;

export default GlobalStyle;
