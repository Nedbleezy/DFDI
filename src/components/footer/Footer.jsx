import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Container, Box, Typography } from '@mui/material';

import './Footer.css';

const Footer = ({ mode }) => {
    return (
        <Box
            style={{
                background: mode === 'dark' ? '#121212' : 'var(--bg1)',
            }}
            sx={{
                backgroundColor: 'var(--bg1)',
                paddingTop: 3,
            }}
        >
            <Container
                maxWidth='lg'
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        md: '2fr 2fr 1fr',
                        xs: '1fr',
                        sm: '1fr 1fr 1fr',
                    },
                }}
            >
                <Box sx={{ marginBottom: 1 }}>
                    <Typography
                        variant='h6'
                        gutterBottom
                        sx={{
                            color: '#fff',
                            fontWeight: 'bold',
                            marginBottom: '1em',
                            fontFamily: 'Montserrat',
                            '&::before': {
                                content: "''",
                                backgroundColor: 'purple',
                                width: '2em',
                                height: '2em',
                                padding: '2px',
                                marginRight: 1,
                            },
                        }}
                    >
                        Quick Links
                    </Typography>
                    <Typography
                        variant='h6'
                        gutterBottom
                        sx={{
                            color: '#fff',
                            fontSize: '0.8rem',
                            transition: 'all 0.6s ease',
                            marginRight: { xs: 1 },
                            display: { xs: 'block', md: 'block' },
                            marginBottom: 2,
                            '&:hover': {
                                transform: 'translateX(5px)',
                                color: 'purple',
                            },
                        }}
                    >
                        <Link to='/'>HOME</Link>
                    </Typography>
                    <Typography
                        variant='h6'
                        gutterBottom
                        sx={{
                            color: '#fff',
                            fontSize: '0.8rem',
                            transition: 'all 0.6s ease',
                            marginRight: { xs: 1 },
                            display: { xs: 'block', md: 'block' },
                            marginBottom: 2,
                            '&:hover': {
                                transform: 'translateX(5px)',
                                color: 'purple',
                            },
                        }}
                    >
                        <Link to='/about'>WHO WE ARE</Link>
                    </Typography>
                    <Typography
                        variant='h6'
                        gutterBottom
                        sx={{
                            color: '#fff',
                            fontSize: '0.8rem',
                            transition: 'all 0.6s ease',
                            marginRight: { xs: 1 },
                            display: { xs: 'block', md: 'block' },
                            marginBottom: 2,
                            '&:hover': {
                                transform: 'translateX(5px)',
                                color: 'purple',
                            },
                        }}
                    >
                        <Link to='/team'>OUR TEAM</Link>
                    </Typography>
                    <Typography
                        variant='h6'
                        gutterBottom
                        sx={{
                            color: '#fff',
                            fontSize: '0.8rem',
                            transition: 'all 0.6s ease',
                            marginRight: { xs: 1 },
                            display: { xs: 'block', md: 'block' },
                            marginBottom: 2,
                            '&:hover': {
                                transform: 'translateX(5px)',
                                color: 'purple',
                            },
                        }}
                    >
                        <Link to='/contact'>CONTACT US</Link>
                    </Typography>
                </Box>
                <Box sx={{ marginBottom: 1 }}>
                    <Typography
                        variant='h6'
                        gutterBottom
                        sx={{
                            color: '#fff',
                            fontWeight: 'bold',
                            marginBottom: '1em',
                            fontFamily: 'Montserrat',
                            '&::before': {
                                content: "''",
                                backgroundColor: 'orange',
                                width: '2em',
                                height: '2em',
                                padding: '2px',
                                marginRight: 1,
                            },
                        }}
                    >
                        Follow Us
                    </Typography>
                    <Typography
                        component='p'
                        sx={{ color: '#fff', marginRight: 3, display: 'inline-block' }}
                    >
                        <a href='https://www.facebook.com/DelightfulFamilyDevelopmentInitiative'>
                            <FacebookIcon
                                sx={{
                                    transition: 'all 0.6s ease',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        color: 'orange',
                                    },
                                }}
                            />
                        </a>
                    </Typography>
                    <Typography
                        component='p'
                        sx={{ color: '#fff', marginRight: 3, display: 'inline-block' }}
                    >
                        <a href='https://twitter.com/DelightfulFDI'>
                            <TwitterIcon
                                sx={{
                                    transition: 'all 0.6s ease',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        color: 'orange',
                                    },
                                }}
                            />
                        </a>
                    </Typography>
                    <Typography
                        component='p'
                        sx={{ color: '#fff', marginRight: 3, display: 'inline-block' }}
                    >
                        <InstagramIcon
                            sx={{
                                transition: 'all 0.6s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    color: 'orange',
                                },
                            }}
                        />
                    </Typography>
                </Box>
                {/* <Box sx={{ paddingRight: 3, marginBottom: 1 }}>
          <Typography
            variant='h6'
            gutterBottom
            sx={{
              color: "#fff",
              fontWeight: "bold",
              marginBottom: "1em",
              fontFamily: "Montserrat",
              "&::before": {
                content: "''",
                backgroundColor: "green",
                width: "2em",
                height: "2em",
                padding: "2px",
                marginRight: 1,
              },
            }}>
            Support Us
          </Typography>
          <Box sx={{ marginBottom: 1 }}>
            <Typography
              variant='h6'
              sx={{
                color: "#fff",
                fontSize: "0.9rem",
                fontFamily: "Montserrat",
              }}>
              Delightful Family
            </Typography>
            <Typography
              variant='h6'
              sx={{
                color: "#fff",
                fontSize: "0.9rem",
                fontFamily: "Montserrat",
              }}>
              Development Initiative
            </Typography>
          </Box>
          <Box sx={{ marginBottom: 1 }}>
            <Typography
              variant='h6'
              sx={{
                color: "#fff",
                fontSize: "0.9rem",
                fontFamily: "Montserrat",
              }}>
              2088717100
            </Typography>{" "}
          </Box>
          <Box sx={{ marginBottom: 1 }}>
            <Typography
              variant='h6'
              sx={{
                color: "#fff",
                fontSize: "0.9rem",
                fontFamily: "Montserrat",
              }}>
              Zenith Bank
            </Typography>{" "}
          </Box>
        </Box> */}

                <Box>
                    <Typography
                        variant='h6'
                        gutterBottom
                        sx={{
                            color: '#fff',
                            fontWeight: 'bold',
                            marginBottom: '1em',
                            fontFamily: 'Montserrat',
                            '&::before': {
                                content: "''",
                                backgroundColor: 'blue',
                                width: '2em',
                                height: '2em',
                                padding: '2px',
                                marginRight: 1,
                            },
                        }}
                    >
                        Contact Us
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <MailIcon sx={{ color: '#fff', fontSize: '1rem', marginBottom: 1 }} />
                        <Typography
                            variant='h6'
                            sx={{
                                color: '#fff',

                                marginBottom: 1,
                                marginLeft: 1,
                            }}
                        >
                            <a
                                href='mailto: dfdi@delightfulfamilydevelopmentinitiative.com'
                                className='as'
                            >
                                Contact@dfdi.com
                            </a>
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <CallIcon sx={{ color: '#fff', fontSize: '1rem', marginBottom: 1 }} />1
                        <Typography
                            variant='h6'
                            sx={{
                                color: '#fff',

                                marginBottom: 1,
                                marginLeft: 1,
                            }}
                        >
                            <a href='tel:+2348033097481' className='as'>
                                {' '}
                                +2348033097481{' '}
                            </a>
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <CallIcon sx={{ color: '#fff', fontSize: '1rem', marginBottom: 1 }} />2
                        <Typography
                            variant='h6'
                            sx={{
                                color: '#fff',

                                marginBottom: 1,
                                marginLeft: 1,
                            }}
                        >
                            <a href='tel:+2348032106138' className='as'>
                                {' '}
                                +2348032106138{' '}
                            </a>
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <LocationOnIcon sx={{ color: '#fff', fontSize: '1rem', marginBottom: 1 }} />
                        <Typography
                            variant='h6'
                            sx={{
                                color: '#fff',
                                marginBottom: 1,
                                marginLeft: 1,
                            }}
                        >
                            <a href='https://goo.gl/maps/aRyHTgPBZNVGhLGU8' className='as'>
                                #8 Rehoboth Close,Off Igbo-Etche Road, Eleme junction, Rivers State.
                            </a>
                        </Typography>
                    </Box>
                </Box>
            </Container>
            {/* myfooter */}
            <Box sx={{ backgroundColor: 'orange' }}>
                <Container
                    sx={{
                        color: '#f4f4f4',
                        display: 'flex',
                        flexWrap: 'wrap',
                        padding: 1,
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            fontStyle: 'italic',
                            fontSize: '.7rem',
                            color: 'var(--textWhite)',
                            fontFamily: 'Monteserat',
                        }}
                    >
                        {' '}
                        All Rights Reserved
                        <Typography
                            sx={{
                                fontStyle: 'italic',
                                fontSize: '.7rem',
                                color: 'var(--textWhite)',
                                marginTop: '-5px',
                                fontFamily: 'Monteserat',
                            }}
                        >
                            Copyright &copy; DFDI {new Date().getFullYear()}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            fontStyle: 'italic',
                            fontSize: '.7rem',
                            color: 'var(--textWhite)',
                            fontFamily: 'Monteserat',
                        }}
                    >
                        {' '}
                        built by nedbleezyTech
                        <Typography
                            sx={{
                                fontStyle: 'italic',
                                fontSize: '.7rem',
                                color: 'var(--textWhite)',
                                marginTop: '-5px',
                                fontFamily: 'Monteserat',
                            }}
                        >
                            contact : nedbleezytech@gmail.com
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
