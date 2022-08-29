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
      image:
        "https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-1/82358632_116440070107592_8240510100458047539_n.jpg?stp=c0.182.720.720a_dst-jpg_p720x720&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ZskyEOTXocYAX-9aWQL&_nc_oc=AQlHau19Ye4xtE3cN8l0ylIzR138niLkN4erwlDj9oTxAdmJt59p-2INMQXB7dUq8IQ&_nc_ht=scontent-los2-1.xx&oh=00_AT8chIO-9sQ2oT8an6PXjExH8ojlpyGtoJVhDQ_WGss0ig&oe=630E41C8",
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

