import React, { useState, useEffect, useCallback } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import Slider from "react-slick";

const Carousel = () => {
    const images = [
        'src/assets/inner-phone.png', 
        'src/assets/inner-phone-2.png', 
        'src/assets/inner-phone.png', 
        'src/assets/inner-phone-2.png', 
        'src/assets/inner-phone.png', 
    ];

    const settings = {
        focusOnSelect: true,
        arrows: true,
        dots: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 4.99,
        speed: 500,
        centerPadding: '0',
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'center', height: '100%' }}>
            <Slider {...settings}>
                {images.map((image, i) => <img key={i} src={image} />)}
            </Slider>
        </div>
    );
};

export default Carousel;