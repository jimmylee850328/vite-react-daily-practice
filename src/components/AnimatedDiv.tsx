import React, { useRef, useEffect } from 'react';
import './AnimatedDiv.css';
import Grid from '@mui/material/Grid';
import { Animated } from "react-animated-css";

const AnimatedDiv = () => {
    return (
        // spacing={0} 可以拿掉
        <Grid className='animated-div' container spacing={0} sx={{ flexGrow: 1, height: '100%' }} justifyContent="center" alignItems="center">
            {/* 那個方塊 */}
            <Grid item xs="auto">
                <div className='test-fadeInUp' style={{ marginTop: '100px', border: '1px solid #8e291b', padding: '8px', borderRadius: '5px', width: 200, height: 100 }}>
                    <span className='highlight'>提升產品及品牌心佔率</span>
                    <p className='highlight'>我是貓</p>
                </div>
            </Grid>

            {/* 那個連結線的 svg */}
            <Grid item xs="auto">
                <svg className='test-fadeInUp' width="69" height="107" viewBox="0 0 69 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.999991 105.5C0.723849 105.5 0.499991 105.724 0.499991 106C0.499991 106.276 0.723849 106.5 0.999991 106.5L0.999991 105.5ZM62.8333 3.5001C62.8333 4.97286 64.0272 6.16677 65.5 6.16677C66.9728 6.16677 68.1667 4.97286 68.1667 3.5001C68.1667 2.02734 66.9728 0.833434 65.5 0.833434C64.0272 0.833434 62.8333 2.02734 62.8333 3.5001ZM38.5 106L38.5 106.5L39 106.5L39 106L38.5 106ZM38.5 3.5L38.5 3L38 3L38 3.5L38.5 3.5ZM0.999991 106.5L38.5 106.5L38.5 105.5L0.999991 105.5L0.999991 106.5ZM39 106L39 3.5L38 3.5L38 106L39 106ZM38.5 4L65.5 4.0001L65.5 3.0001L38.5 3L38.5 4Z" fill="#8E291B"/>
                </svg>
            </Grid>

            <Grid item xs="auto">
                <div className="circle" />
            </Grid>
          
            <Grid item xs="auto">
                <svg className='test-fadeInDown' width="83" height="122" viewBox="0 0 83 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M81.9999 1.49994C82.2761 1.49994 82.4999 1.27608 82.4999 0.999938C82.4999 0.723795 82.2761 0.499938 81.9999 0.499938L81.9999 1.49994ZM4.48344 116.784C3.25963 115.965 1.60333 116.293 0.783998 117.516C-0.035336 118.74 0.29256 120.397 1.51637 121.216C2.74018 122.035 4.39648 121.707 5.21581 120.483C6.03515 119.26 5.70725 117.603 4.48344 116.784ZM42.5 119L42.5 119.5L43 119.5L43 119L42.5 119ZM42.5001 0.999956L42.5001 0.499957L42.0001 0.499959L42.0001 0.999957L42.5001 0.999956ZM42.5 118.5L2.99991 118.5L2.99991 119.5L42.5 119.5L42.5 118.5ZM81.9999 0.499938L42.5001 0.499957L42.5001 1.49996L81.9999 1.49994L81.9999 0.499938ZM42.0001 0.999957L42 119L43 119L43.0001 0.999956L42.0001 0.999957Z" fill="#8E291B"/>
                </svg>
            </Grid>

            <Grid item xs="auto">
                <div className='test-fadeInDown' style={{ marginTop: '-110px', border: '1px solid #8e291b', padding: '8px', borderRadius: '5px', width: 200, height: 100 }}>
                    <span className='highlight'>提升產品及品牌心佔率</span>
                </div>
            </Grid>
        </Grid>
    );
};

export default AnimatedDiv;

/* <Animated animationIn="slideInDown" isVisible={true}>
  <img src="src/assets/test.png" width={493}></img>
</Animated> */