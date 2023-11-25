import React, { useRef, useEffect } from 'react';
import './Seal.css';
import Grid from '@mui/material/Grid';
import { Animated } from "react-animated-css";

const Seal = () => {
    return (
        <div className="seal-container">
            <img className='seal seal-head' src='src/assets/seal/1.png' width={121} height={105}></img>
            <div className='seal seal-body'></div>
            <img className='seal seal-footer' src='src/assets/seal/3.png' width={121} height={105}></img>
        </div>
    );
};

export default Seal;

/* <Animated animationIn="slideInDown" isVisible={true}>
  <img src="src/assets/test.png" width={493}></img>
</Animated> */