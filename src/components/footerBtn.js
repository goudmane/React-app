import * as React from 'react'
import anime from "animejs/lib/anime.es.js";
import  { useState, useRef, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import { Icon } from '@components/icons';
const ticks = Array.from(Array(8));

const FooterBtn = ({txt}) => {
  const [movment, setMovment] = useState(false);
  const animation = useRef(null);

  const handleClick = () => {
    movment ? btnAnimation() : animation.current.play();
    setMovment(!movment);
  };

  useEffect(() => {


  }, []);

  const btnStyle = {
    borderRadius: '80px',
    background: 'rgb(48 49 137 / 20%)',
    color: '#303189',
    border: 'unset',
    paddingInlineEnd: '18px',
    fontSize: '14px',
    paddingBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '-3px',

 }

 const spanStyle = {
    visibility: 'visible',
    transform: 'scaleX(1)',
    left: '20px',
 }

 const btnAnimation = () => {
    animation.current = anime.timeline({
        easing: 'easeInOutQuad',
        duration:500,
    });
    animation.current.add(
        {
            targets: `.FooterBtn`,
            scaleX: [0,1] ,
            visibility: ['hidden','visible']
        }
    ).add(
        {
            targets: `.FooterBtn > span`,
            left: '0px',
        }
    );
}



  return (
    <Button style={btnStyle} className="FooterBtn" onMouseOver={btnAnimation}>
        <span style={spanStyle}><Icon  name={txt} /></span>{txt}
    </Button>
  );
};

export default FooterBtn;
