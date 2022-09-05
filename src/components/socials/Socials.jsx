import React from "react";
import "./styles.css";
import { Grid, Paper, Typography } from "@mui/material";
import Iframer from "../iframe/Iframer";

const Socials = () => {
  return (
    <Grid container spacing={2} sx={{ padding: "10px", marginBottom: "10px" }}>
      <Grid item xs={12} sm={6} md={6} sx={{ padding: "5px" }}>
        <Paper elevation={3}>
          <Typography
            sx={{
              backgroundColor: "blue",
              padding: "6px",
              color: "white",
              fontWeight: "bold",
            }}>
            Facebook
          </Typography>
          <Iframer />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6} sx={{ padding: "5px" }}>
        <Paper elevation={3} sx={{ height: "450px", overflow: "auto" }}>
          <Typography
            sx={{
              backgroundColor: "purple",
              padding: "15px",
              marginBottom: "5px",
              color: "white",
              fontWeight: "bold",
            }}>
            Twitter
          </Typography>
          <a
            className='twitter-timeline'
            href='https://twitter.com/DelightfulFDI?ref_src=twsrc%5Etfw'>
            Tweets by DelightfulFDI
          </a>{" "}
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={{ padding: "5px", display: { xs: "block", md: "none" } }}>
        <Paper elevation={3}>
          <Typography
            sx={{
              backgroundColor: "brown",
              padding: "5px",
              color: "white",
              fontWeight: "bold",
            }}>
            Instagram
          </Typography>
          COMING SOON
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Socials;

