import { useState, useEffect } from 'react';
import "./BestCarousel.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const PureCarousel = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const images = [
        { 'image': 'src/assets/inner-phone-1.png', 'gif': null },
        { 'image': 'src/assets/inner-phone-2.png', 'gif': null },
        { 'image': 'src/assets/inner-phone-3.png', 'gif': null },
        { 'image': 'src/assets/inner-phone-4.png', 'gif': null },
        { 'image': 'src/assets/inner-phone-5.png', 'gif': null },
    ];

    const [position, setPosition] = useState([0, 1, 2, 3, 4]);
    const [classList, setClassList] = useState(['super-left', 'left', 'center', 'right', 'super-right']);
    const getNewNum = (num) => {
        return (num + 5) % 5;
    };

    const change_position = (op: string, num: number) => {
        setClassList(() => {
            const temp = JSON.parse(JSON.stringify(classList));
            if (op == 'diff') {
                if (num < 0) {
                    temp.push(temp.shift());
                } else {
                    temp.unshift(temp.pop());
                }
                return temp;
            } else if (op == 'direct') {
                temp[getNewNum(num - 2)] = "super-left";
                temp[getNewNum(num - 1)] = "left";
                temp[num] = "center";
                temp[getNewNum(num + 1)] = "right";
                temp[getNewNum(num + 2)] = "super-right";
            }
            return temp;
        });
    };


    return (
        <>
            <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#333',
                position: 'relative',
                overflowX: 'hidden'
            }}>
                <ChevronLeftIcon 
                    onClick={() => change_position('diff', -1)}
                    style={{ position: 'absolute', left: 10, cursor: 'pointer', zIndex: 5, color: 'white' }}
                > 
                </ChevronLeftIcon>

                <img 
                    src={'src/assets/phone.png'} 
                    className='phone-size'
                    style={{ 
                        height: '90%',
                        objectFit: 'contain',
                        cursor: 'pointer',
                        position: 'absolute',
                    }}
                ></img>

                {images.map((item, index) => (
                    <div 
                        key={index} 
                        style={{ 
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <div 
                            className={`slider ${classList[index]}`}
                            style={{ 
                                position: 'absolute', 
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                width: '90%',
                                height: '90%' 
                            }}>
                                <img 
                                    onClick={() => change_position('direct', index)}
                                    src={classList[index] === 'center' && item.gif ? item.gif : item.image}
                                    style={{ 
                                        width: '100%', 
                                        height: '100%',
                                        objectFit: 'contain',
                                        cursor: 'pointer',
                                    }}
                                ></img>
                            </div>
                        </div>
                    </div>
                ))}

                <ChevronRightIcon 
                    onClick={() => change_position('diff', 1)}
                    style={{ position: 'absolute', right: 10, cursor: 'pointer', zIndex: 5, color: 'white' }}
                > 
                </ChevronRightIcon>
                                    
                <div style={{
                    position: 'absolute',
                    display: 'flex',
                    bottom: '5px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    left: 0,
                    right: 0,
                    width: 'fit-content'
                }}>
                    {[0, 1, 2, 3, 4].map((item, index) => (
                        <div 
                            key={index}
                            style={{ 
                                width: '5px', 
                                height: '5px', 
                                backgroundColor: classList[index] == "center" ? '#fff' : '#999',
                                marginLeft: '5px',
                                marginRight: '5px'
                            }}
                        >
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PureCarousel;