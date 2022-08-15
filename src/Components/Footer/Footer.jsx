import { Box, Typography, IconButton } from '@mui/material'
import React from 'react'
import Twitter from '../../assets/Twitter.png'
import Facebook from '../../assets/Facebook.png'
import Instagram from '../../assets/Instagram.png'
import Tumblr from '../../assets/Tumblr.png'
import Telegram from '../../assets/Telegram.png'


const Footer = () => {
    return (
        <>
            <Box sx={{ 
                backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.36),  #000)",
                display: 'flex',
                padding: '20px 0',
                justifyContent: 'space-between', 
                width: '100%',
                position: 'absolute',
                bottom: '0',
            }}>
                <Box
                    maxWidth="lg"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        margin: '0 auto',
                        width: '95%', 
                    }}
                >
                    <div className='footer-text' >Copyrights ©️ NiFTigram</div>
                    <div className='social-icons-container'>
                        <a href="#">
                            <img src={Twitter} style={{width: '25px'}} alt="Twitter" srcSet={Twitter} />
                        </a>
                        <a href="#">
                            <img src={Facebook} style={{width: '25px'}} alt="Facebook" srcSet={Facebook} />
                        </a>
                        <a href="#">
                            <img src={Instagram} style={{width: '25px'}} alt="Instagram" srcSet={Instagram} />
                        </a>
                        <a href="#">
                            <img src={Telegram} style={{width: '25px'}} alt="Telegram" srcSet={Telegram} />
                        </a>
                        <a href="#">
                            <img src={Tumblr} style={{width: '25px'}} alt="Tumblr" srcSet={Tumblr} />
                        </a>
                    </div>
                </Box>

            </Box>
        </>
    )
}

export default Footer