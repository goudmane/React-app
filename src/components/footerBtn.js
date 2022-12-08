import * as React from 'react'
import anime from "animejs/lib/anime.es.js";
import  { useState, useRef, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import { Icon } from '@components/icons';
const ticks = Array.from(Array(8));

const FooterBtn = ({txt}) => {
  const [movment, setMovment] = useState(false);
  const animation = useRef(null);
  let toClass = 'd-none';

  const handleClick = () => {
    movment ? toClass = 'd-block' : toClass = 'd-none';
    setMovment(!movment);
  };

  useEffect(() => {


  }, []);

  const btnStyle = {
    borderRadius: '80px',
    background: 'rgba(48, 49, 137, 0.2)',
    color: 'rgb(48, 49, 137)',
    border: 'unset',
    paddingInlineEnd: '18px',
    fontSize: '14px',
    paddingBottom: '8px',
    marginBottom: '-1px',
    transform: 'scaleX(1)',
    width: '104px',
    position: 'relative',
    right: '10px',
    textAlign: 'end'

 }

 const spanStyle = {
    left: '23px',
    position: 'relative',
    top: '3px'
 }

/*  const btnAnimation = () => {
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
 */


  return (
    <div className='d-inline-flex'>
        <span style={spanStyle}><Icon  name={txt} /></span>
        <Button style={btnStyle} className={"FooterBtn  " + toClass} onClick={handleClick}>
            {txt}
        </Button>
    </div>
  );
};

export default FooterBtn;
