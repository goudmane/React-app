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
    movment ? animation.current.pause() : animation.current.play();
    setMovment(!movment);
  };

  useEffect(() => {
    animation.current = anime.timeline({
        easing: 'easeOutExpo',
        duration:500,
    });

    animation.current.add(
        {
            targets: `.FooterBtn`,
            scaleX: 1 ,
            visibility: 'visible'
        }
    ).add(
        {
            targets: `.FooterBtn > span`,
            scaleX: 1 ,
            visibility: 'visible'
        }
    );

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
    transform: 'scaleX(0)',
    visibility: 'hidden'
 }

 const spanStyle = {
    visibility: 'visible',
 }
  return (
    <Button style={btnStyle} className="FooterBtn" onClick={handleClick}>
        <span style={spanStyle}><Icon  name={txt} /></span>{txt}
    </Button>
  );
};

export default FooterBtn;
