import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${fonts};
    body {
        margin : 10pt 20pt;
    }


    .carousel-cell .carousel-cell > img {
        width: 172pt;
        height: 230pt;
        margin-right: 10px;
      }

    .carousel-cell.is-selected .carousel-cell.is-selected>img{
        /* background: #ED2; */
        width: 172pt !important;
        height: 230pt;
    }
`;

export default GlobalStyle;
