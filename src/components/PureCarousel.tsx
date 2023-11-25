import React, { useState, useEffect, useCallback } from 'react';
import "./PureCarousel.css";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { display } from '@mui/system';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const PureCarousel = () => {
    const images = [
        'src/assets/inner-phone-1.png', // 80% 4 0
        'src/assets/inner-phone-2.png', // 0%  0 1
        'src/assets/inner-phone-3.png', // 20% 1 2
        'src/assets/inner-phone-4.png', // 40% 2 3
        'src/assets/inner-phone-5.png', // 60% 3 4
    ];

    const [activeIndex, setActiveIndex] = useState(2);
    const [position, setPosition] = useState([0, 1, 2, 3, 4]);
    const get_new_num = (num) => (num + 5) % 5;
    const change_position = (op, num) => {
        setPosition(prevPosition => {
            if (op == 'diff') {
                const temp = JSON.parse(JSON.stringify(prevPosition));
                if (num < 0) {
                    temp.unshift(temp.pop());
                } else {
                    temp.push(temp.shift());
                }
                return temp;
            } else if (op == 'direct') {
                const temp = [get_new_num(num - 2), get_new_num(num - 1), get_new_num(num), get_new_num(num + 1), get_new_num(num + 2)];
                prevPosition = temp.map((x, index) => temp.indexOf(index));
                return [...prevPosition];
            }
        });

        setActiveIndex(() => {
            if (op == 'diff') {
                return get_new_num(activeIndex + -num);
            } else {
                return num;
            }
        });
    };

    return (
        <>

            <div style={{ display: 'flex', alignItems: 'center', height: '80vh', backgroundColor: '#333', position: 'relative' }}>
                <ChevronLeftIcon 
                    onClick={() => change_position('diff', -1)}
                    style={{ position: 'absolute', left: 10, cursor: 'pointer', zIndex: 2, color: 'white' }}
                > 
                </ChevronLeftIcon>

                {images.map((item, index) => (
                    <div 
                        key={index} 
                        style={{ 
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <div 
                            className='slider'
                            style={{ 
                                left: `${position[index] * 20}%`,
                                position: 'absolute', 
                                width: '20%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center' 
                            }}
                        >
                            <div 
                                className={`temp ${index === activeIndex ? 'active' : ''}`}
                                style={{ backgroundImage: `url(${item})` }}
                            >
                                {/* <img 
                                    onClick={() => change_position('direct', index)}
                                    src={item} 
                                    style={{ 
                                        width: '100%', 
                                        height: '100%',
                                        objectFit: 'contain',
                                        cursor: 'pointer'
                                    }}
                                ></img> */}
                            </div>
                        </div>
                    </div>
                ))}

                <ChevronRightIcon 
                    onClick={() => change_position('diff', 1)}
                    style={{ position: 'absolute', right: 10, cursor: 'pointer', zIndex: 2, color: 'white' }}
                > 
                </ChevronRightIcon>
            </div>
        </>
    );
};

export default PureCarousel;