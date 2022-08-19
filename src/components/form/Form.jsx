import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

import emailjs from "@emailjs/browser";
import {
  YOUR_SERVICE_ID,
  YOUR_TEMPLATE_ID,
  YOUR_PUBLIC_KEY,
} from "../../emailKeys";

const Form = () => {
  const [state, setState] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, state, YOUR_PUBLIC_KEY)
      .then((result) => {
        setState({
          Name: "",
          Email: "",
          Phone: "",
          Message: "",
        });
        alert("Message Sent, We will get back to you shortly", result.text);
      })
      .catch((err) => {
        alert("An error occurred, Please try again", err.text);
      });
  };
  return (
    <Box>
      <Container maxWidth='md' sx={{ marginBottom: 3 }}>
        <form
          style={{ width: "100%", padding: "1rem" }}
          onSubmit={handleSubmit}>
          <Typography
            variant='h4'
            gutterBottom
            sx={{ color: "var(--textGray)", fontFamily: "Monteserat" }}>
            Contact us
          </Typography>
          <TextField
            fullWidth
            margin='dense'
            name='Name'
            variant='outlined'
            label='FullName'
            type='text'
            required
            value={state.Name}
            onChange={(e) => setState({ ...state, Name: e.target.value })}
          />
          <TextField
            fullWidth
            margin='dense'
            name='Email'
            variant='outlined'
            label='Email'
            type='email'
            required
            value={state.Email}
            onChange={(e) => setState({ ...state, Email: e.target.value })}
          />
          <TextField
            fullWidth
            margin='dense'
            name='Phone'
            variant='outlined'
            label='Phone Number'
            type='number'
            required
            value={state.Phone}
            onChange={(e) => setState({ ...state, Phone: e.target.value })}
          />
          <TextField
            fullWidth
            margin='dense'
            name='Message'
            variant='outlined'
            label='Message'
            multiline={true}
            minRows={4}
            type='text'
            required
            value={state.Message}
            onChange={(e) => setState({ ...state, Message: e.target.value })}
          />
          <Button variant='contained' sx={{ marginTop: 2 }} type='submit'>
            SEND NOW
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Form;
