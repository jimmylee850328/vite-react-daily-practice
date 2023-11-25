import React, { useState, useEffect, useCallback } from 'react';
import "./Xiaomi.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
}));
  
const Xiaomi = () => {
    const [imageSrc, setImageSrc] = useState("https://i.imgur.com/9ZWgP8t.png");
    const changeImageSrc = () => {
        if (imageSrc === "https://i.imgur.com/9ZWgP8t.png")
            setImageSrc("https://i.imgur.com/0rlXyLk.gif");
        else
            setImageSrc("https://i.imgur.com/9ZWgP8t.png");
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Button variant="contained" onClick={() => changeImageSrc()}> GO </Button>
            <Grid container spacing={2}>
                <Grid item lg={6} sm={4} xs={12}>
                    <Item>
                        <h1> POCO M5s </h1>
                        <h1
                            style={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            64 MP AI 四鏡頭 | FHD+ AMOLED 螢幕
                        </h1>

                        <img
                            className='gif-img'
                            src={imageSrc}
                            style={{
                                minWidth: '50px',
                                minHeight: '50px',
                                width: '15.625vw',
                                height: '15.625vw',
                            }}
                        ></img>
                    </Item>
                </Grid>

                <Grid item lg={3} sm={4} xs={12}>
                    <Item>
                        <h1> POCO M5s </h1>
                        <h1
                            style={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            64 MP AI 四鏡頭 | FHD+ AMOLED 螢幕
                        </h1>
    
                        <img
                            src={
                                'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1665998046.01136425!348x348.png?f=webp'
                            }
                            style={{
                                minHeight: '50px',
                                minWidth: '50px',
                                width: '15.625vw',
                                height: '15.625vw',
                                objectFit: 'contain',
                            }}
                        ></img>
                    </Item>
                </Grid>

                <Grid item lg={3} sm={4} xs={12}>
                    <Item>
                        <h1> POCO M5s </h1>
                        <h1
                            style={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            64 MP AI 四鏡頭 | FHD+ AMOLED 螢幕
                        </h1>
    
                        <img
                            src={
                                'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1665998046.01136425!348x348.png?f=webp'
                            }
                            style={{
                                minHeight: '50px',
                                minWidth: '50px',
                                width: '15.625vw',
                                height: '15.625vw',
                                objectFit: 'contain',
                            }}
                        ></img>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Xiaomi;