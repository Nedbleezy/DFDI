import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./styles.css";
import Fade from "react-reveal/Fade";

const Announce = () => {
  return (
    <Box
      sx={{
        marginTop: "3rem",
        marginBottom: "3rem",

        background: "linear-gradient(90deg, #5f1e34 0%, #946809 100%)",
        padding: "4rem",
        overflow: "hidden",
      }}>
      <Fade right>
        <Typography
          variant='h5'
          gutterBottom
          sx={{
            fontSize: {
              xs: "1.6rem",
              md: "2.8rem",
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
              padding: 1,
              fontFamily: "Monteserat",
            },
          }}>
          ANNOUNCEMENT!!!
        </Typography>
      </Fade>
      <Fade left>
        <Typography
          variant='h5'
          sx={{
            fontSize: {
              xs: "1.3rem",
              md: "1.6rem",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
              fontFamily: "Cursive",
            },
          }}>
          NAKED AND UNASHAMED{" "}
        </Typography>
      </Fade>
      <Box className='news'>
        <Typography
          variant='h6'
          sx={{
            fontSize: {
              xs: "1.8rem",
              md: "3rem",
              textAlign: "center",
              fontFamily: "Cursive",
              color: "#fff",
            },
          }}>
          comes up on the <b> 17th of september 2022...</b>
        </Typography>
      </Box>
      <Typography
        variant='h6'
        sx={{
          textAlign: "center",
          fontFamily: "Monteserat",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}>
        Click on the link below to register
      </Typography>
      <Typography
        gutterBottom
        variant='h6'
        sx={{
          textAlign: "center",
          fontFamily: "Monteserat",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}>
        Registration ends on 10<sup>th</sup> of Sept. 2022
      </Typography>
      <Box sx={{ display: "grid", placeItems: "center" }}>
        <a href='https://forms.gle/diaHc2X913Yx2ULL9'>
          <Button variant='contained'>Register</Button>
        </a>
      </Box>
    </Box>
  );
};

export default Announce;
