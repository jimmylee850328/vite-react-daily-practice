import { useState, useEffect } from 'react';
import "./PureCarousel.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const PureCarousel = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // 監聽 window resize 事件
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth < 1024) {
                setMyWidth(100 / 3);
            } else {
                setMyWidth(20);
            }
        };
  
        window.addEventListener('resize', handleResize);
  
        // 卸載時移除事件監聽器
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]); // 空的 dependency array 表示只在 component 第一次渲染時設置事件監聽器

    
    const images = [
        { 'image': 'src/assets/inner-phone-1.png', 'gif': 'src/assets/inner-phone.gif' },
        { 'image': 'src/assets/inner-phone-2.png', 'gif': null },
        { 'image': 'src/assets/inner-phone-3.png', 'gif': 'src/assets/inner-phone.gif' },
        { 'image': 'src/assets/inner-phone-4.png', 'gif': null },
        { 'image': 'src/assets/inner-phone-5.png', 'gif': null },
    ];

    const [myWidth, setMyWidth] = useState(20);
    const [activeIndex, setActiveIndex] = useState(2);
    const [position, setPosition] = useState([0, 1, 2, 3, 4]);
    const get_new_num = (num: number) => (num + 5) % 5;
    const get_scale = (index: number) => {
        if (index === get_new_num(activeIndex - 1) || index === get_new_num(activeIndex + 1)) {
            return 0.85;
        } else if (index === get_new_num(activeIndex - 2) || index === get_new_num(activeIndex + 2)) {
            return 0.7;
        }
        return 1;
    };
    const change_position = (op: string, num: number) => {
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

    const getLeftDiff = (index: number) => {
        if (windowWidth <= 1024) {
            return (position[index] - 1) * myWidth;
        } else {
            return position[index] * myWidth;
        }
    };

    const hideImg = (index: number) => {
        if (windowWidth <= 1024) {
            return (position[index] - 1) * myWidth < 0 || (position[index] - 1) * myWidth > 67;
        } else {
            return false;
        }
    };

    return (
        <>
            {/* 怎麼讓這個 div 不能 scroll? */}
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
                    style={{ position: 'absolute', left: 10, cursor: 'pointer', zIndex: 2, color: 'white' }}
                > 
                </ChevronLeftIcon>

                <img 
                    src={'src/assets/phone.png'} 
                    style={{ 
                        width: `${myWidth}%`, 
                        height: '90%',
                        objectFit: 'contain',
                        cursor: 'pointer',
                        position: 'absolute',
                        left: myWidth === 20 ? '40%' : 'calc(100% / 3)',
                        zIndex: 2,
                    }}
                ></img>

                {images.map((item, index) => (
                    <div 
                        key={index} 
                        style={{ 
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        className={Math.abs(position[activeIndex] - position[index]) === 2 ? 'control-visibility': ''}
                    >
                        <div 
                            className='slider'
                            style={{ 
                                left: `${getLeftDiff(index)}%`,
                                position: 'absolute', 
                                height: '100%',
                                display: 'flex',
                                visibility: hideImg(index) ? 'hidden' : 'visible',
                                justifyContent: 'center',
                                alignItems: 'center',
                                transform: `scale(${get_scale(index)})`,
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                width: '90%',
                                height: '90%' 
                            }}>
                                <img 
                                    onClick={() => change_position('direct', index)}
                                    src={index === activeIndex && item.gif ? item.gif : item.image}
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
                    style={{ position: 'absolute', right: 10, cursor: 'pointer', zIndex: 2, color: 'white' }}
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
                                backgroundColor: index === get_new_num(4 - activeIndex) ? '#fff' : '#999',
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