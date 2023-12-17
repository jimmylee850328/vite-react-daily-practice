import React, { useRef, useEffect } from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// custom
import BestCarousel from './components/BestCarousel.tsx';
import PureCarousel from './components/PureCarousel.tsx';
import Carousel from './components/Carousel.tsx';
import AnimatedDiv from './components/AnimatedDiv.tsx';
import Seal from './components/Seal.tsx';
import Cat from './components/Cat.tsx';
import Xiaomi from './components/XiaoMi.tsx';

const App = () => {
    return (
        <div className="App">
            {/* <PureCarousel /> */}
            <BestCarousel />
            
            {/* <div>
                <Seal />
            </div>
            
            <div>
                <Cat />
            </div>

            <Container sx={{ height: '100vh', display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                <AnimatedDiv />
            </Container>
            
            <Container maxWidth="xl" sx={{ 
                height: '100vh', 
                bgcolor: 'pink',
            }}>
                <Carousel />
            </Container> */}
        </div>
    );
};

export default App;