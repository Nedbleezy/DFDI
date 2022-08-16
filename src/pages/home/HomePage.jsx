import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import NavBar from "../../components/navbar/NavBar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import classes from "./styles.module.css";
import WelcomeMessage from "../../components/welcomeMessage/WelcomeMessage";
import Socials from "../../components/socials/Socials";
import Map from "../../components/map/Map";
import Trapezium from "../../components/trapezium/Trapezium";
import Section1 from "../../components/section1/Section1";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Carousel } from "react-responsive-carousel";
import Announce from "../../components/announcements/Announce";

const HomePage = () => {
  return (
    <div className={classes.homePage}>
      <header>
        <Box
          sx={{
            position: "relative",
            // height: { xl: "100vh", sm: "auto", md: "100vh" },

            backgroundImage:
              "linear-gradient(-101deg,  var(--bg1) 61.5%, var(--bg2) 0%)",
          }}>
          <NavBar />
          <Container
            maxWidth='xl'
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Box
              sx={{
                color: "#fff",
                flex: 5,
                marginBottom: "1.5rem",
              }}>
              <Fade bottom>
                <Typography
                  variant='h1'
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "2.2rem", md: "3.4rem" },
                    textShadow: "-3px 3px 2px var(--bg1)",
                    fontFamily: "Montserrat",
                  }}>
                  WELCOME TO
                </Typography>
                <Typography
                  variant='h5'
                  gutterBottom
                  sx={{
                    color: { xs: "#fff", md: "var(--bg1)" },
                    fontWeight: "bold",
                    fontSize: { xs: ".9rem", md: ".96rem" },
                    fontFamily: "Montserrat",
                    marginBottom: 3,
                  }}>
                  DELIGHTFUL FAMILY DEVELOPMENT INITIATIVE
                </Typography>

                <Typography
                  variant='h6'
                  sx={{
                    width: { xs: "98%", md: "80%" },
                    fontFamily: "Montserrat",
                    fontSize: "1.1rem",
                  }}>
                  Never, ever devalue yourself! Don’t join the enemy and toxic
                  people to demean God’s creation! Stand out in your marriage,
                  you too can make your marriage work. No two marriages are the
                  same, your house can be a home.
                </Typography>
                <Link to='/about'>
                  <Button
                    variant='contained'
                    sx={{
                      marginTop: "2rem",
                      padding: "0.4rem",
                      fontWeight: "bold",
                      backgroundColor: "var(--bg1)",
                      "&:hover": { backgroundColor: "#40c087" },
                    }}>
                    learn more
                  </Button>
                </Link>
              </Fade>
            </Box>

            <Box sx={{ height: "100%", flex: 7, marginTop: 2 }}>
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
                  transitionTime={2000}>
                  <div>
                    <img src='assets/p1.png' alt='slider-1' />
                  </div>
                  <div>
                    <img src='assets/p2.png' alt='slider-2' />
                  </div>
                  <div>
                    <img src='assets/p3.png' alt='slider-3' />
                  </div>
                  <div>
                    <img src='assets/p4.png' alt='slider-4' />
                  </div>
                  <div>
                    <img src='assets/p5.png' alt='slider-5' />
                  </div>
                  <div>
                    <img src='assets/p6.png' alt='slider-6' />
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
        <Box sx={{ marginBottom: 5 }}>
          <Announce />
        </Box>

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
          <Footer />
        </Box>
      </footer>
    </div>
  );
};

export default HomePage;
