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
        <Paper elevation={3} sx={{ height: "450px", overflow: "hidden" }}>
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
          <iframe
            title='twitter'
            src='https://widget.taggbox.com/106943'
            style={{
              width: "100%",
              height: "400px",
              border: "none",
              overflow: "auto",
            }}></iframe>
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

