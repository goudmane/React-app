

import React, { Component } from "react";



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


const arrayOfObjects = [
    {
        txt : 'Accueil',
        iconName : 'Home',
        extra : 'd-block'
    },{
        txt : 'Mobilité',
        iconName : 'Car',
        extra : 'd-flex'
    },{
        txt : 'Profil',
        iconName : 'User',
        extra : 'd-flex'
    },
];



function FooterBar() {

    return (
        <>
        {/* <div style={style}>

        </div> */}

        <div class="wrapper">

            {arrayOfObjects.map(({ txt, iconName, extra }) => (
                <FooterBtn key={iconName} styleM={extra} iconName={iconName} txt={txt} />
            ))}
        </div>
        </>
    );

}

export default FooterBar
