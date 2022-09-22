import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './styles.module.css';
import data from './data';

const Section = () => {
    return (
        <div className={styles.SectionContainer}>
            <Grid container spacing={1} justifyContent='flex-start' alignItems='center'>
                {data.map((item) => (
                    <Grid item xs={12} sm={6} md={3} key={item.id}>
                        <Card sx={{ maxWidth: 300, marginBottom: 2 }}>
                            <CardMedia
                                component='img'
                                height='200'
                                image={item?.image}
                                alt='profile-Img'
                                sx={{
                                    objectFit: 'contain',
                                }}
                            />
                            <CardContent>
                                <Typography
                                    variant='h6'
                                    component='div'
                                    sx={{
                                        color: 'var(--textGray)',
                                        textAlign: 'center',
                                        fontFamily: 'Montserrat',
                                    }}
                                >
                                    {item.name}
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant='body2'
                                    sx={{
                                        textAlign: 'center',
                                        color: 'var(--bg3)',
                                        fontWeight: 'bold',
                                        fontFamily: 'Montserrat',
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Section;
