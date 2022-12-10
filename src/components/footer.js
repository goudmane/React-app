

import React, { Component } from "react";



import FooterBtn from './footerBtn.js'
var style = {
    backgroundColor: 'rgb(248, 248, 248)',
    borderTop: '1px solid rgb(231, 231, 231)',
    textAlign: 'center',
    padding: '13px 44px',
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
        extra : {
            icon: {
                top: '-1px',
                position: 'relative',
                right: '1px'
            },
            txt:{
                position: 'relative',
                right: '8px',
                bottom: '-2.2px'
            },
            btn:{
                width: '104px',
                background: 'rgba(48, 49, 137, 0.2)'
            }
        }
    },{
        txt : 'Mobilité',
        iconName : 'Car',
        extra : {
            icon: {
                position: 'relative',
                right: '11.9px',
            },
            txt:{
                position: 'relative',
                right: '6px',
                bottom: '4px',
            }
        }
    },{
        txt : 'Profil',
        iconName : 'User',
        extra : {
            icon: {
                position: 'relative',
                right: '-18px',
            },
            txt:{
                position: 'relative',
                right: '6px',
                bottom: '4px',
            }
        }
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
