import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const Form = () => {
  const [state, setState] = useState({
    name: "",
    Email: "",
    Message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
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
            name='name'
            variant='outlined'
            label='Name'
            type='text'
            required
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
          <TextField
            fullWidth
            margin='dense'
            name='Email'
            variant='outlined'
            label='Email'
            type='email'
            required
            onChange={(e) => setState({ ...state, Email: e.target.value })}
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
