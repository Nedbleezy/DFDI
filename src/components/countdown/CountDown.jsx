import React from "react";
import { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";

const CountDown = () => {
  const countDownDate = new Date(2022, 8, 18).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );
  const [Down, setDown] = useState([]);
  const [d, h, m, s] = Down;
  const getReturnValues = (countDown) => {
    // 1ms = 0.001s
    // 60s = 1min
    // 60min = 1hr
    // 24hrs = 1day
    // converting countDown from ms to s (countDown * 0.001s)
    //const Cd = Math.floor(countDown * 0.001); // to seconds
    //const x = Math.floor(Cd / 60); // to minutes
    //const y = Math.floor(x / 60); // to hours
    //const z = Math.floor(y / 24);

    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
  };
  useEffect(() => {
    setDown(getReturnValues(countDown));
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [countDown, countDownDate]);
  return (
    <Box sx={{ display: "flex", marginTop: 2, justifyContent: "center" }}>
      <Container maxWidth='md' sx={{ backgroundColor: "red", border: 1 }}>
        <Typography variant='h5' sx={{ fontWeight: "bold" }}>
          {d}
        </Typography>
        <Typography variant='h6'>Days</Typography>
      </Container>
      <Container maxWidth='md' sx={{ backgroundColor: "blue", border: 1 }}>
        <Typography variant='h5' sx={{ fontWeight: "bold" }}>
          {h}
        </Typography>
        <Typography variant='h6'>Hrs</Typography>
      </Container>
      <Container maxWidth='md' sx={{ backgroundColor: "green", border: 1 }}>
        <Typography variant='h5' sx={{ fontWeight: "bold" }}>
          {m}
        </Typography>
        <Typography variant='h6'>Mins</Typography>
      </Container>
      <Container maxWidth='md' sx={{ backgroundColor: "brown", border: 1 }}>
        <Typography variant='h5' sx={{ fontWeight: "bold" }}>
          {s}
        </Typography>
        <Typography variant='h6'>Secs</Typography>
      </Container>
    </Box>
  );
};

export default CountDown;
