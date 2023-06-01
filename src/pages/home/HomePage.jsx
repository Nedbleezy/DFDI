import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import NavBar from '../../components/navbar/NavBar';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import WelcomeMessage from '../../components/welcomeMessage/WelcomeMessage';

import Map from '../../components/map/Map';
import Trapezium from '../../components/trapezium/Trapezium';
import Section1 from '../../components/section1/Section1';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Carousel } from 'react-responsive-carousel';
import Programs from '../../components/programs/Programs';
import Gallary from '../../components/gallery/Gallary';
import Socials from '../../components/socials/Socials';
import { CssBaseline } from '@mui/material';
import Info from '../../components/info/Info';

const HomePage = ({ setMode, mode }) => {
  return (
    <div>
      <header>
        <CssBaseline />
        <Box
          style={{
             position: 'relative',
            background:
              mode === 'dark'
                ? '#121212'
                : 'linear-gradient(-101deg,  var(--bg1) 61.5%, var(--bg2) 0%)',
          }}
         
        >
          <NavBar setMode={setMode} mode={mode} />
          <Container
            maxWidth='xl'
         
            sx={(theme)=>({
              display: 'flex',
               flexDirection: { xs: 'column', lg: 'row' },
              justifyContent: 'center',
               alignItems: 'center',
               [theme.breakpoints.down("sm")]:{
                flexDirection:"column-reverse",
                
               }
            })}

          >
            <Box
              sx={{
                color: '#fff',
                flex: 5,
                marginBottom: '1.5rem',
              }}
            >
              <Fade bottom>
                <Typography
                  variant='h1'
                

                    sx={(theme)=>({
                 fontWeight: 'bold',
                    fontSize: { xs: '2.2rem', md: '3.4rem' },
                    textShadow: '-3px 3px 2px var(--bg1)',
                    fontFamily: 'Montserrat',
               [theme.breakpoints.down("sm")]:{
                marginTop: "50px"
                
               }
            })}
                >
                  WELCOME TO
                </Typography>
                <Typography
                  variant='h5'
                  gutterBottom
                  sx={{
                    color: { xs: '#fff', md: 'var(--bg1)' },
                    fontWeight: 'bold',
                    fontSize: { xs: '.9rem', md: '.96rem' },
                    fontFamily: 'Montserrat',
                    marginBottom: 3,
                  }}
                >
                  DELIGHTFUL FAMILY DEVELOPMENT INITIATIVE
                </Typography>

                <Typography
                  variant='h6'
                  sx={{
                    width: { xs: '98%', md: '80%' },
                    fontFamily: 'Montserrat',
                    fontSize: '1.1rem',
                  }}
                >
                  Never, ever devalue yourself! Don’t join the enemy and toxic
                  people to demean God’s creation! Stand out in your marriage,
                  you too can make your marriage work. No two marriages are the
                  same, your house can be a home.
                </Typography>
                <Link to='/about'>
                  <Button
                    variant='contained'
                    sx={{
                      marginTop: '2rem',
                      color: '#fff',
                      padding: '0.4rem',
                      fontWeight: 'bold',
                      backgroundColor: 'var(--bg1)',
                      '&:hover': { backgroundColor: '#40c087' },
                    }}
                  >
                    learn more
                  </Button>
                </Link>
              </Fade>
            </Box>

            <Box sx={{ height: '100%', flex: 7, marginTop: 2 }}>
              <Fade right>
                <Carousel
                  infiniteLoop={true}
                  autoPlay={true}
                  showStatus={false}
                  showThumbs={false}
                  interval={6000}
                  useKeyboardArrows={true}
                  stopOnHover={false}
                  swipeable={true}
                  showIndicators={false}
                  showArrows={true}
                  transitionTime={2000}
                  animationHandler="fade"
                  
                >
                  <div>
                    <img src='assets/carousel/rsz.png' alt='slider-a' />
                  </div>
                  <div>
                    <img src='assets/carousel/p25.png' alt='slider-g' />
                  </div>
                  <div>
                    <img src='assets/carousel/p24.png' alt='slider-k' />
                  </div>
                  <div>
                    <img src='assets/carousel/rp16.png' alt='slider-b' />
                  </div>

                  <div>
                    <img src='assets/p1.webp' alt='slider-1' />
                  </div>
                  <div>
                    <img src='assets/p2.webp' alt='slider-2' />
                  </div>
                  <div>
                    <img src='assets/p4.webp' alt='slider-3' />
                  </div>
                  <div>
                    <img src='assets/p5.webp' alt='slider-4' />
                  </div>
                  <div>
                    <img src='assets/p6.webp' alt='slider-5' />
                  </div>
                  <div>
                    <img src='assets/p7.webp' alt='slider-6' />
                  </div>
                </Carousel>
              </Fade>
            </Box>
          </Container>
        </Box>
      </header>
      <main>
        <Box sx={{ marginBottom: 5 }}>
          <WelcomeMessage />
        </Box>
        <Section1 />
        <Info />
        <Box sx={{ marginBottom: 5 }}>
          <Programs />
        </Box>

        <Container maxWidth='lg'>
          <Trapezium
            color='var(--textWhite)'
            borderRight='50px solid transparent'
            borderBottom='70px solid var(--swat6)'
            title='OUR PICTURE GALLERY'
          />
          <Gallary />
        </Container>
        <Container maxWidth='lg'>
          <Trapezium
            color='var(--textWhite)'
            borderRight='50px solid transparent'
            borderBottom='70px solid var(--swat6)'
            title='CONNECT WITH DFDI'
          />
          <Socials />
        </Container>

        <Box>
          <Map />
        </Box>
      </main>

      <footer>
        <Box>
          <Footer mode={mode} />
        </Box>
      </footer>
    </div>
  );
};

export default HomePage;
