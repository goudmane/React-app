import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${fonts};
    body {
        margin : 10pt 20pt;
    }

    .carousel-cell {
        width: 33%;
        height: 160px;
        margin-right: 10px;
      }
    .carousel-cell.size-180 { width: 180px; }
    .carousel-cell.size-large { width: 75%; }

    .carousel-cell.is-selected {
        /* background: #ED2; */
    }
`;

export default GlobalStyle;
