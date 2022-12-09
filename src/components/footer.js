

import React, { Component } from "react";



import FooterBtn from './footerBtn.js'
var style = {
    backgroundColor: 'rgb(248, 248, 248)',
    borderTop: '1px solid rgb(231, 231, 231)',
    textAlign: 'center',
    padding: '13px 30px',
    position: 'fixed',
    left: '0px',
    bottom: '0px',
    height: '67.5px',
    width: '100%',
    maxWidth: '414px',
    borderTopLeftRadius: '80px',
    borderTopRightRadius: '80px',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px -3px 6px 0px',
    display: 'flex',
    zIndex: '1000',
    justifyContent: 'space-between',
    alignItems: 'center'
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

        <div className="wrapper" style={style}>

            {arrayOfObjects.map(({ txt, iconName, extra }) => (
                <FooterBtn key={iconName} styleM={extra} iconName={iconName} txt={txt} />
            ))}
        </div>
        </>
    );

}

export default FooterBar
