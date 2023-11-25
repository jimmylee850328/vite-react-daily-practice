import React, { useRef, useEffect } from 'react';
import './Cat.css';
import Grid from '@mui/material/Grid';
import { Animated } from "react-animated-css";

const Dog = () => {
    return (
        <div className="dog-container">
            <img className='dog-head' src='src/assets/dog/1.png' width={128} height={128}></img>
            <div className='dog-body' style={{ display: 'inline-block' }}></div>
            <img className='dog-footer' src='src/assets/dog/3.png' width={128} height={128} style={{ display: 'inline-block', position: 'relative', top: '-1px' }}></img>
        </div>
    );
};

export default Dog;

/* <Animated animationIn="slideInDown" isVisible={true}>
  <img src="src/assets/test.png" width={493}></img>
</Animated> */