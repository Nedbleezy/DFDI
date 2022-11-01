import React from 'react';
import { Container, Typography } from '@mui/material';

const Info = () => {
  return (
    <Container maxWidth='xl'>
      <Typography variant='h4'>Marriage Counseling of DFDI</Typography>

      <Typography
        variant='h6'
        sx={{
          fontFamily: 'Montserrat',
          color: 'var(--textGray)',
          fontSize: '1.05rem',
          '&:first-letter': {
            fontSize: '2rem',
            color: 'var(--swat3)',
            fontWeight: 'bold',
          },
        }}
      >
        Sometimes people go through rough patches in their relationships and
        marriages and need to talk to a person. We are here to serve you, we
        provide couples with marriage counseling help you solve several issues
        can assist you in all areas of your relationship. In Delightful Family
        Development Initiative we know that marriage counseling can be very
        traumatic, the thought of talking to strangers can scare off the most
        formidable individuals we guarantee you full confidentiality and have
        the greatest empathy for your situation.
      </Typography>
    </Container>
  );
};

export default Info;
