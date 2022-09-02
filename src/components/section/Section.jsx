import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";

const Section = () => {
  const data = [
    {
      id: 1,
      name: "Pst. Dr. Babbs Umoetok",
      title: "PRESIDENT",
      image: "assets/babbs.png",
    },
    {
      id: 2,
      name: "Pst. Dr. Dora Umoetok",
      image: "assets/dora.jpg",
      title: "VICE PRESIDENT",
    },

    {
      id: 3,
      name: "Pst. Cyril Eluma",
      image:
        "https://www.teenagersupport.org/wp-content/uploads/2020/07/eloma.jpg",
      title: "MEMBER",
    },
    {
      id: 4,
      name: "Pst. Godson Samuel",
      image: "assets/Godson.jpeg",
      title: "MEMBER",
    },
    {
      id: 5,
      name: "Esukuile Awajigbana",
      image: "assets/jere.jpg",
      title: "SECRETARY",
    },
    {
      id: 6,
      name: "Ikechukwu Iheukwumere",
      image: "assets/Ik.jpg",
      title: "MEMBER",
    },
    {
      id: 7,
      name: "Mayowa Aratunde Samuel",
      image: "assets/mayor.png",
      title: "MEMBER",
    },

    {
      id: 8,
      name: "Obiekezie Henry Nnamdi",
      image: "assets/henry.jpg",
      title: "MEMBER",
    },
    {
      id: 9,
      name: "Ibidumo Fiberesima",
      image: "assets/Ibidumo.jpeg",
      title: "MEMBER",
    },
    {
      id: 10,
      name: "Blessing Umoetuk",
      image: "assets/blessing.jpeg",
      title: "MEMBER",
    },
    {
      id: 11,
      name: "Okere Chinedum Godwin",
      image: "assets/ned.jpeg",
      title: "MEMBER",
    },
    {
      id: 12,
      name: "Kufre Bassey",
      image: "assets/kuf.png",
      title: "MEMBER",
    },
    {
      id: 12,
      name: "Esukuile Ibeikareawaji",
      image: "assets/Ib.png",
      title: "MEMBER",
    },
  ];

  return (
    <div className={styles.SectionContainer}>
      <Grid
        container
        spacing={1}
        justifyContent='flex-start'
        alignItems='center'>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Card sx={{ maxWidth: 300, marginBottom: 2 }}>
              <CardMedia
                component='img'
                height='200'
                image={item?.image}
                alt='profile-Img'
                sx={{
                  objectFit: "contain",
                }}
              />
              <CardContent>
                <Typography
                  variant='h6'
                  component='div'
                  sx={{
                    color: "var(--textGray)",
                    textAlign: "center",
                    fontFamily: "Montserrat",
                  }}>
                  {item.name}
                </Typography>
                <Typography
                  gutterBottom
                  variant='body2'
                  sx={{
                    textAlign: "center",
                    color: "var(--bg3)",
                    fontWeight: "bold",
                    fontFamily: "Montserrat",
                  }}>
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

