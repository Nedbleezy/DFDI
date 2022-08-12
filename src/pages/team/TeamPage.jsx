import { Box, Container } from "@mui/material";
import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import Section from "../../components/section/Section";
import Trapezium from "../../components/trapezium/Trapezium";

const TeamPage = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            backgroundColor: "var(--bg3)",
            backgroundImage:
              "linear-gradient(-115deg,  var(--bg1) 54%, var(--bg2) 0%)",
          }}>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXuLvixmxfdymcDTLEA_uNd2GgwLDLLNhEA&usqp=CAU'
            alt='bg'
            style={{ height: "200px", filter: "brightness(15%)" }}
          />
          <Box sx={{ top: 0, left: 0, right: 0, position: "absolute" }}>
            <NavBar />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: " 1fr auto",
          height: "100vh",
          marginTop: -2,
        }}>
        <Box>
          <Container maxWidth='xl'>
            <Trapezium
              color='var(--textWhite)'
              borderRight='50px solid transparent'
              borderBottom='70px solid var(--swat5)'
              title='MEET OUR  TEAM MEMBERS'
            />
            <Section />
          </Container>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default TeamPage;
