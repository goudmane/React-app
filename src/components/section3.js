import * as React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image'

import RoundedBtn from "./roundedBtn";
import { graphql, useStaticQuery } from 'gatsby'

import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

const Section1 = ({ title }) => {
    const h3style = {
        marginBottom: "53px",
        marginTop: "42px",
        color: 'var(--main-bleu)',

        lineHeight: '33px',
        textAlign: 'center',
        fontSize: '25px',
        letterSpacing: '0.5px',
        textTransform: 'uppercase'
    }
    const QUESTGpBtnStyle = {
        backgroundColor: '#FAFAFA',
        borderRadius: '30px',
        boxShadow: '#00000033 0px 1px 4px'
    }
    const BtnStyle = {
        borderRadius: '30px',
        width: '100%',
        background: 'var(--main-bleu)',
        height: '45px'

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

            <h3 style={h3style}>QUESTIONNAIRES</h3>


            <Flickity
                className={'QUEST-carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
                selectedAttraction='0.2'
                friction='0.8'
            >
                <div class="QUEST-carousel-cell"><img src="https://placeimg.com/640/480/animals" rounded /></div>
                <div class="QUEST-carousel-cell"><img src="https://placeimg.com/640/480/animals" rounded /></div>
                <div class="QUEST-carousel-cell"><img src="https://placeimg.com/640/480/animals" rounded /></div>
            </Flickity>



        <RoundedBtn marginStyle={{margin: '35px 50px 52px 50px;'}} text="Voir tous les actualites" />

        </div>
    )
}

export default Section1
