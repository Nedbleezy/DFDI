import { Box } from "@mui/material";
import React from "react";
import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";
import Map from "../../components/map/Map";
import NavBar from "../../components/navbar/NavBar";

const ContactPage = () => {
  return (
    <>
      <Box>
        <Box>
          <Box
            sx={{
              backgroundColor: "#9E8FB2",
            }}>
            <img
              src='assets/p5.jpeg'
              alt='bg'
              style={{
                height: "300px",
                filter: "brightness(60%)",
                width: "100%",
              }}
            />
            <Box sx={{ top: 0, left: 0, right: 0, position: "absolute" }}>
              <NavBar />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "var(--textWhite)",
            display: { xs: "block", md: "flex" },
          }}>
          <Box sx={{ flex: 6 }}>
            <Form />
          </Box>

          <Box sx={{ flex: 6 }}>
            <img
              src='assets/papa&mama.jpg'
              alt='papa&mama'
              style={{ padding: ".5rem", width: "100%" }}
            />
          </Box>
        </Box>

        <Box>
          <Map />
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default ContactPage;
