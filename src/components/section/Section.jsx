import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";

const Section = () => {
  const data = [
    {
      id: 1,
      name: "Pst. Dr. Babbs Umoetok",
      title: "PRESIDENT",
      image:
        "https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/121327282_10221988827004184_8878867953635468408_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PGskK5Xb4UcAX81IxAm&_nc_ht=scontent-los2-1.xx&oh=00_AT9hMoknz7Hoj2hyReRKdFxBQfwwGtGA8xTv8eFwBYdm3Q&oe=630C3AA0",
      description: `Babbs Umoetok is a Medical Doctor, Pastor of Firstlove Assembly 
        Oyigbo,and the president of Delightful family development Initiative`,
    },
    {
      id: 2,
      name: "Pst. Dr. Dora Umoetok",
      image:
        "https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/130493709_5119486808069412_5009444809886882381_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=J2jJxGLcFw4AX_KvV_G&_nc_ht=scontent-los2-1.xx&oh=00_AT9YEbfRdSkuizSlW0SDu0JxgMCzVIj8Ll_FvBJS41Kh5w&oe=630C4A70",
      title: "VICE PRESIDENT",
      description: `Dora Umoetok is the pioneer of the TSO vision and a retired Director of the Nigerian National Petroleum Corporation`,
    },

    {
      id: 3,
      name: "Pst. Cyril Eluma",
      image:
        "https://www.teenagersupport.org/wp-content/uploads/2020/07/eloma.jpg",
      title: "BOARD MEMBER",
      description: `Cyril Eluma serves as a consultant, a member of Delightful family development Initiative  and a Pastor of Dunamis Christian Center, Nigeria`,
    },
    {
      id: 4,
      name: "Pst. Godson Samuel",
      image: "assets/Godson.jpeg",
      title: "BOARD MEMBER",
      description: `Cyril Eluma serves as a consultant, a member of Delightful family development Initiative  and a Pastor of Dunamis Christian Center, Nigeria`,
    },
    {
      id: 5,
      name: "Esukuile Migbana",
      image:
        "https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-1/104338424_3893766920695981_7700021369721673439_n.jpg?stp=dst-jpg_p720x720&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=mgIxNWq8CZEAX9kLQkO&_nc_ht=scontent-los2-1.xx&oh=00_AT99jCdQY6VZ80rO1JeOVorW4r2nj-xMps09zi9ntiN1ig&oe=630C2C0E",
      title: "SECRETARY",
      description: `Esukuile Migbana is the secretary of Delightful Family Developement Initiative `,
    },
    {
      id: 6,
      name: "Iyke Melody",
      image:
        "https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-1/82358632_116440070107592_8240510100458047539_n.jpg?stp=c0.182.720.720a_dst-jpg_p720x720&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ZskyEOTXocYAX-9aWQL&_nc_oc=AQlHau19Ye4xtE3cN8l0ylIzR138niLkN4erwlDj9oTxAdmJt59p-2INMQXB7dUq8IQ&_nc_ht=scontent-los2-1.xx&oh=00_AT8chIO-9sQ2oT8an6PXjExH8ojlpyGtoJVhDQ_WGss0ig&oe=630E41C8",
      title: "MUSIC",
      description: `Ikechukwu Iheukwumere is the music director of Firstlove Assembly 
        Oyigbo,and a member of Delightful family development Initiative`,
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

