import { css } from 'styled-components';




import HelveticaNeueRegularTtf from '@fonts/HelveticaNeue-Regular.ttf';
const HelveticaNeueNormalWeights = {
    400: [HelveticaNeueRegularTtf],
};
import RbRegularTtf from '@fonts/HelveticaNeue-Regular.ttf';
import RbMediumTtf from '@fonts/HelveticaNeue-Regular.ttf';
import RbBoldTtf from '@fonts/HelveticaNeue-Regular.ttf';
import RbBlackTtf from '@fonts/HelveticaNeue-Regular.ttf';


const RbNormalWeights = {
    400: [RbRegularTtf],
    500: [RbMediumTtf],
    700: [RbBoldTtf],
    900: [RbBlackTtf],
};

const calibreItalicWeights = {
  400: [CalibreRegularItalicWoff, CalibreRegularItalicWoff2],
  500: [CalibreMediumItalicWoff, CalibreMediumItalicWoff2],
  600: [CalibreSemiboldItalicWoff, CalibreSemiboldItalicWoff2],
};

const sfMonoNormalWeights = {
  400: [SFMonoRegularWoff, SFMonoRegularWoff2],
  600: [SFMonoSemiboldWoff, SFMonoSemiboldWoff2],
};

const sfMonoItalicWeights = {
  400: [SFMonoRegularItalicWoff, SFMonoRegularItalicWoff2],
  600: [SFMonoSemiboldItalicWoff, SFMonoSemiboldItalicWoff2],
};


const calibre = {
  name: 'Calibre',
  normal: calibreNormalWeights,
  italic: calibreItalicWeights,
};
const sfMono = {
  name: 'SF Mono',
  normal: sfMonoNormalWeights,
  italic: sfMonoItalicWeights,
};

const roboto = {
    name: 'Roboto',
    normal: RbNormalWeights,
  };
const HelveticaNeue = {
  name: 'HelveticaNeue',
  normal: HelveticaNeueNormalWeights,
};
const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const calibreNormal = createFontFaces(calibre);
const calibreItalic = createFontFaces(calibre, 'italic');

const sfMonoNormal = createFontFaces(sfMono);
const sfMonoItalic = createFontFaces(sfMono, 'italic');


const HelveticaNeueNormal = createFontFaces(HelveticaNeue);
const RobotoNormal = createFontFaces(roboto);
const Fonts = css`
  ${calibreNormal + calibreItalic + sfMonoNormal + sfMonoItalic + HelveticaNeueNormal+ RobotoNormal}
`;

export default Fonts;
