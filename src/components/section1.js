import * as React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image'
import { graphql, useStaticQuery } from 'gatsby'

import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

const Section1 = ({ title }) => {
    const h3style = {
        marginBottom: "49px",
        marginTop: "47px",
        color: 'var(--main-bleu)',

        lineHeight: '39px',
        marginBottom: '49pt',
        marginTop: '47pt',
        textAlign: 'center',
        fontSize: '30pt',
        letterSpacing: '0.6pt',
        textTransform: 'uppercase'
    }
    const CategoryBtnStyle = {
        background: 'transparent',
        width: '33.33%',
        borderRadius: '30px',

        background: 'transparent',
        width: '33.33%',
        borderRadius: '30px !important',
        border: 'unset',
        color: '#909090',
        fontSize: '14px',
        fontFamily: 'Roboto,var(--bs-btn-font-family)',
        lineHeight: '19px',
        height: '45px'
    }
    const BtnStyle = {
        marginBottom: "49px",
        marginTop: "47px",

    }
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    const flickityOptions = {
        freeScroll: true,
        wrapAround: true
    }

    return (
        <div id='section1'>
            <ButtonGroup size="lg" className="mb-2 w-100">
                <Button style={CategoryBtnStyle} className="BtnActive">Magasins</Button>
                <Button style={CategoryBtnStyle} className="">Restauration</Button>
                <Button style={CategoryBtnStyle} className="">Informations</Button>
            </ButtonGroup>

            <h3 style={h3style}>THE PLACE TO BE</h3>


            <Flickity
                className={'category-carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
                selectedAttraction='0.2'
                friction='0.8'
            >
                <div class="category-carousel-cell"><img src="https://placeimg.com/640/480/animals" rounded /></div>
                <div class="category-carousel-cell"><img src="https://placeimg.com/640/480/animals" rounded /></div>
                <div class="category-carousel-cell"><img src="https://placeimg.com/640/480/animals" rounded /></div>
            </Flickity>

            <Button>Voir tous les actualites</Button>
        </div>
    )
}

export default Section1
