import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${fonts};
    body {
        margin : 10pt 20pt;
    }

    .carousel-cell > img {
        width: 172px !important;
        height: 230px;
    }
    .carousel-cell {
        width: 172px;
        height: 230px;
        margin-right: 10px;
      }

    .carousel-cell.is-selected {
        /* background: #ED2; */
        width: 196px !important;
        height: 262px;
    }

    .carousel-cell.is-selected>img{
        /* background: #ED2; */
        width: 196px !important;
        height: 262px;
    }
`;

export default GlobalStyle;
