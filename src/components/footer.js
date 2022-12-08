

import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import { Icon } from '@components/icons';


import FooterBtn from './footerBtn.js'
var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "16px 29px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "67.5px",
    width: "100%",
    maxWidth : '414px',
    borderTopLeftRadius:'80px',
    borderTopRightRadius:'80px',
    boxShadow: "0px -3px 6px 0px #0000000d",
    display: 'flex',
    zIndex: '1000',
    justifyContent: 'space-evenly',
}



function FooterBar() {
    return (
        <div style={style}>
            <FooterBtn txt='Home'/>
            <FooterBtn txt='Car'/>
            <FooterBtn txt='User'/>
        </div>
    )
}

export default FooterBar
