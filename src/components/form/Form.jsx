import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

const Form = () => {
  return (
    <Box>
      <Container maxWidth='md' sx={{ marginBottom: 3 }}>
        <form style={{ width: "100%", padding: "1rem" }}>
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
          />
          <TextField
            fullWidth
            margin='dense'
            name='Email'
            variant='outlined'
            label='Email'
            type='email'
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
          />
          <Button variant='contained' sx={{ marginTop: 2 }}>
            SEND NOW
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Form;
