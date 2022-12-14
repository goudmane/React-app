import { css } from 'styled-components';




import HelveticaNeueRegularTtf from '@fonts/HelveticaNeue-Regular.ttf';
const HelveticaNeueNormalWeights = {
    400: [HelveticaNeueRegularTtf],
};
import RbRegularTtf from '@fonts/Roboto/Roboto-Regular.ttf';
import RbMediumTtf from '@fonts/Roboto/Roboto-Medium.ttf';
import RbBoldTtf from '@fonts/Roboto/Roboto-Bold.ttf';
import RbBlackTtf from '@fonts/Roboto/Roboto-Black.ttf';


const RbNormalWeights = {
    400: [RbRegularTtf],
    500: [RbMediumTtf],
    700: [RbBoldTtf],
    800: [RbBlackTtf],
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


const HelveticaNeueNormal = createFontFaces(HelveticaNeue);
const RobotoNormal = createFontFaces(roboto);


const Fonts = css`
  ${HelveticaNeueNormal+ RobotoNormal}
`;

export default Fonts;
