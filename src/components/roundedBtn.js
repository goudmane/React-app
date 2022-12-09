import React from 'react';

import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const BtnStyleDefault = {

    borderRadius: '30px',
    width: '100%',
    background: 'var(--main-bleu)',
    height: '45px',
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '17px',
    textAlign: 'center',
    letterSpacing: '0.9px',
    wordSpacing: '-3px'
}

const RoundedBtn = ({containerStyle , BtnStyle , text}) => (

  <div>
    <div style={containerStyle}>
        <Button style={BtnStyle ? BtnStyle : BtnStyleDefault }>{text}</Button>
    </div>
  </div>
);



export default RoundedBtn;
