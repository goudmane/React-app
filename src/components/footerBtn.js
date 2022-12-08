import anime from "animejs/lib/anime.es.js";
import { useState, useRef, useEffect } from "react";

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
        duration: 750
    });

    for (const tick in ticks) {
      animation.current.add(
        {
          targets: `.`,
          scaleY: 1.5 + Math.random() * 4,
          duration: 300 + Math.random() * 300
        }
      );
    }

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
    marginBottom: '-3px'
 }
  return (
    <Button style={btnStyle} className="FooterBtn" onClick={handleClick}><Icon name={txt} />{txt}</Button>
  );
};

export default FooterBtn;
