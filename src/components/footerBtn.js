import * as React from 'react'
import  { useState, useRef, useEffect} from "react";
import { Icon } from '@components/icons';

const FooterBtn = ({txt , iconName , styleM}) => {
  const [movment, setMovment] = useState(false);
  const animation = useRef(null);
  let toClass = 'd-none';


  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

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



  return (
    <div class="button" style={ styleM.btn ? styleM.btn : "" } >
        <div class="icon" style={styleM.icon}><Icon  name={iconName} /></div>
        <span style={styleM.txt}>{txt}</span>
    </div>
  );
};

export default FooterBtn;
