import { Box, Typography } from "@mui/material";
import React from "react";

const Trapezium = ({ color, borderLeft, borderBottom, borderRight, title }) => {
  return (
    <Box
      sx={{
        marginTop: "1rem",
        marginBottom: "1rem",
        paddingTop: "1.2rem",
        paddingLeft: "1rem",
        width: "100%",
        borderLeft: { borderLeft },
        borderRight: { borderRight },
        borderBottom: { borderBottom },
        height: 0,
        color: { color } || "#fff",
      }}>
      <Typography
        variant='h3'
        sx={{
          fontFamily: "Helvetica",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "2.7rem" },
          paddingTop: "1rem",
        }}>
        {title}
      </Typography>
    </Box>
  );
};

export default Trapezium;
