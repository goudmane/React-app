import React from 'react';

const style = {
    margin: 'auto',
    background: 'rgb(241, 242, 243)',
    display: 'block',
    shapeRendering: 'auto'
}
const IconLoader = () => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={style} width="271px" height="271px" viewBox="0 0 100 100" >
        <circle cx="50" cy="50" r="33" strokeWidth="2" stroke="#303189" strokeDasharray="51.83627878423159 51.83627878423159" fill="none" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" dur="1.3513513513513513s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50" />
        </circle>
        <circle cx="50" cy="50" r="30" strokeWidth="2" stroke="#dadada" strokeDasharray="47.12388980384689 47.12388980384689" strokeDashoffset="47.12388980384689" fill="none" stroke-linecap="round">
            <animateTransform attributeName="transform" type="rotate" dur="1.3513513513513513s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50" />
        </circle>
    </svg>
);

export default IconLoader;
