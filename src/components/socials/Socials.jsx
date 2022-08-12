import React from "react";
import "./styles.css";
import { Grid, Paper, Typography } from "@mui/material";
import Iframer from "../iframe/Iframer";

const Socials = () => {
  return (
    <Grid container spacing={2} sx={{ padding: "10px", marginBottom: "10px" }}>
      <Grid item xs={12} sm={6} md={4} sx={{ padding: "5px" }}>
        <Paper elevation={3}>
          <Typography
            sx={{
              backgroundColor: "blue",
              padding: "5px",
              color: "white",
              fontWeight: "bold",
            }}>
            Facebook
          </Typography>
          <Iframer />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} sx={{ padding: "5px" }}>
        <Paper elevation={3}>
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
          <Iframer />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} sx={{ padding: "5px" }}>
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
          <Iframer />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Socials;

