

import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import { Icon } from '@components/icons';
var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "67.5px",
    width: "100%",
    borderTopLeftRadius:'80px',
    borderTopRightRadius:'80px',
    boxShadow: "0px -3px 6px 0px #000000",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function FooterBar() {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>

                <Button className=""><Icon name='Home' />Accueil</Button>
                <Button className=""><Icon name='Car' />Transport</Button>
                <Button className=""><Icon name='User' />Profile</Button>
            </div>
        </div>
    )
}

export default FooterBar
