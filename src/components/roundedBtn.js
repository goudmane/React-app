import React from 'react';

import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const BtnStyle = {
    borderRadius: '30px',
    width: '100%',
    background: 'var(--main-bleu)',
    height: '45px',
    fontFamily: '\'Roboto\'',
    fontWeight: '400',
    fontSize: '18px',
    textAlign: 'center',
    letterSpacing: '0.9px',
    wordSpacing: '-3px'


}
const RoundedBtn = ({marginStyle,text}) => (
  <div>
    <div style={marginStyle}>
        <Button style={BtnStyle}>{text}</Button>
    </div>
  </div>
);



export default RoundedBtn;
