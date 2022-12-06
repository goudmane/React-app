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
        marginBottom: "49px",
        marginTop: "47px",
        color: 'var(--main-bleu)',

        lineHeight: '39px',
        textAlign: 'center',
        fontSize: '30px',
        letterSpacing: '0.6px',
        textTransform: 'uppercase',
        fontFamily: '\'Roboto\'',
        fontWeight: '900'
    }
    const CategoryGpBtnStyle = {
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


    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };
    return (
        <div id='section1'>
            <ButtonGroup size="lg" className="mb-2 w-100" style={CategoryGpBtnStyle}>
                <Button className={isActive ? 'BtnActive' : ''} onClick={handleClick}>Magasins</Button>
                <Button className={isActive ? 'BtnActive' : ''} onClick={handleClick}>Restauration</Button>
                <Button className={isActive ? 'BtnActive' : ''} onClick={handleClick}>Informations</Button>
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



        <RoundedBtn marginStyle={{margin: '35px 50px 52px 50px;'}} text="Voir tous les actualites" />

        </div>
    )
}

export default Section1
