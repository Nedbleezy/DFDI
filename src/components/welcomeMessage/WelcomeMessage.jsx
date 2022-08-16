import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Trapezium from "../trapezium/Trapezium";
import Fade from "react-reveal/Fade";

const WelcomeMessage = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{
        display: { xs: "block", md: "flex" },
        gap: 2,
      }}>
      <Box sx={{ flex: 5, marginTop: 5 }}>
        <img
          src='assets/p3.jpg'
          alt='mama&papa'
          style={{
            width: "100%",

            objectFit: { xs: "contain", md: "cover" },
          }}
        />
      </Box>
      <Box sx={{ flex: 8 }}>
        <Box sx={{ marginLeft: { xs: 0, md: 5 } }}>
          <Trapezium
            color='#fff'
            borderLeft='50px solid transparent'
            borderBottom='70px solid var(--swat6)'
            title='WELCOME TO DFDI'
          />
        </Box>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHJHKR35g8cIzJJU1Py43HIiPUM9jMTtBNA&usqp=CAU'
              alt='quoto'
              style={{
                opacity: 0.1,
                width: "40px",
                height: "40px",
                marginLeft: "20px",
              }}
            />
          </Box>
          <Box>
            <Fade bottom>
              <Typography
                variant='h6'
                sx={{
                  fontFamily: "Montserrat",
                  color: "var(--textGray)",
                  fontSize: "1.1rem",
                }}>
                Our vision at Delightful Family Development Initiatives (DFDI)
                is for God to mold you into a purpose-filled vessel, pointing
                all grace and glory back to Him. It’s our prayer that His Spirit
                will fully illuminate you on your journey in marriage through
                every trial and victory.
              </Typography>
            </Fade>
            <br />
            <Fade bottom>
              <Typography
                variant='h6'
                sx={{
                  fontFamily: "Montserrat",
                  color: "var(--textGray)",
                  fontSize: "1.1rem",
                }}>
                My wife and I speak blessings over you and your family. Our
                prayer is that your home brightly reflects God’s joy, peace, and
                goodness.
              </Typography>
            </Fade>
            <br />
            <Fade bottom>
              <Typography
                sx={{
                  color: "var(--swat8)",
                  fontFamily: "Montserrat",
                }}>
                Pastor and Dr Mrs Babbs Umoetok
              </Typography>
            </Fade>
            <Fade right>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  color: "var(--swat8)",
                }}>
                DELIGHTFUL FAMILY DEVEVELOPMENT INITIATIVE
              </Typography>
            </Fade>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default WelcomeMessage;
