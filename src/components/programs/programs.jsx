import React from 'react';
import { Container, Paper, Grid } from '@mui/material';
import styles from './prog.module.css';
import Trapezium from '../trapezium/Trapezium';
const Programs = () => {
    return (
        <Container maxWidth='xl'>
            <Trapezium
                color='var(--textWhite)'
                borderRight='50px solid transparent'
                borderBottom='70px solid var(--swat3)'
                title='OUR PREVIOUS SEMINARS'
            />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={2} sx={{ padding: 2 }}>
                        <img
                            src='assets/prevprogram/rfj.jpg'
                            alt='heartbeat'
                            className={styles.img}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={2} sx={{ padding: 2 }}>
                        <img
                            src='assets/prevprogram/cpl2.jpg'
                            alt='heartbeat'
                            className={styles.img}
                        />
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={2} sx={{ padding: 2 }}>
                        <img
                            src='assets/prevprogram/rkl.jpg'
                            alt='heartbeat'
                            className={styles.img}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={2} sx={{ padding: 2 }}>
                        <img
                            src='assets/prevprogram/wds.jpg'
                            alt='heartbeat'
                            className={styles.img}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={2} sx={{ padding: 2 }}>
                        <img
                            src='assets/prevprogram/dwp.jpg'
                            alt='heartbeat'
                            className={styles.img}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={2}>
                        <img
                            src='assets/prevprogram/hb.jpg'
                            alt='heartbeat'
                            className={styles.img}
                        />
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={2} sx={{ padding: 2 }}>
                        <img
                            src='assets/prevprogram/nu.jpg'
                            alt='heartbeat'
                            className={styles.img}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Programs;
