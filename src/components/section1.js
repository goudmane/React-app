import * as React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image'
import { graphql, useStaticQuery } from 'gatsby'

const Section1 = ({ title }) => {
    const h3style={
        marginBottom:"49pt",
        marginTop: "47pt"
    }
    const BtnStyle={
        marginBottom:"49pt",
        marginTop: "47pt"
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

  return (
    <>
      <ButtonGroup size="lg" className="mb-2 w-100">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>

      <h3 style={h3style}>THE PLACE TO BE</h3>

      <div>
        <Image src='https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png' rounded />
      </div>

      <Button>Voir tous les actualites</Button>
    </>
  )
}

export default Section1