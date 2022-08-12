import { Box, Container, List, ListItem, Typography } from "@mui/material";
import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import SpokeIcon from "@mui/icons-material/Spoke";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import SendIcon from "@mui/icons-material/Send";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import Fade from "react-reveal/Fade";

const AboutPage = () => {
  return (
    <>
      <Box>
        <Box>
          <Box
            sx={{
              backgroundColor: "#9E8FB2",
              width: "100%",
            }}>
            <img
              src='https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80'
              alt='bg'
              style={{
                height: "250px",
                filter: "brightness(35%)",
              }}
            />
            <Box sx={{ top: 0, left: 0, right: 0, position: "absolute" }}>
              <NavBar />
            </Box>
          </Box>
        </Box>

        {/*  */}
        <Box
          sx={{
            width: "100%",
            backgroundColor: "var(--textWhite)",
            marginBottom: "2rem",
          }}>
          <Container maxWidth='md'>
            <SpokeIcon sx={{ color: "var(--bg3)" }} fontSize='large' />
            <Fade top>
              <Typography
                variant='h3'
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Monteserat",
                  color: "var(--textGray)",
                  textAlign: "center",
                  padding: 1,
                }}>
                We’re changing the way people think about marriage
              </Typography>
            </Fade>
            <Fade bottom>
              <Typography
                variant='h6'
                component='p'
                sx={{
                  fontFamily: "Montserrat ",
                  fontSize: "1.18rem",
                  color: "var(--textGray)",
                }}>
                Delightful family development Initiative (DFDI) was born out of
                a strong desire to restore love, happiness and stability to
                families.It is also aimed at grooming singles for happy
                marriage.
              </Typography>
            </Fade>
            <br />
            <Fade bottom>
              <Typography
                variant='h6'
                component='p'
                sx={{
                  fontFamily: "Montserrat ",
                  color: "var(--textGray)",
                  fontSize: "1.18rem",
                }}>
                DFDI had its first outing on the 17th of March 2018,with an
                attendance of 200 persons including the married,engaged,divorced
                and singles. And since then he Initiative has been holding a
                quarterly seminar captured <b>“Marriage on the Rock”</b>, which
                has recorded numerous testimonies from attendance such as
                healing and restoration of broken homes,marriages, relationships
                and families.
              </Typography>
            </Fade>
            <br />
            <Fade bottom>
              <Typography
                variant='h6'
                component='p'
                sx={{
                  fontFamily: "Montserrat",
                  color: "var(--textGray)",
                  fontSize: "1.18rem",
                }}>
                Also the Initiative has equipped young people (singles) with
                necessary tools/information for preparing for marriage.This has
                in turn inspired many into marriage institution.
              </Typography>
            </Fade>
          </Container>
        </Box>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "var(--swat1)",
            marginBottom: "2rem",
          }}>
          <Container maxWidth='md'>
            <Fade left>
              <Typography
                variant='h3'
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Monteserat",
                  color: "var(--bg3)",
                  textAlign: "center",
                  padding: 1,
                }}>
                OUR GOALS
              </Typography>
            </Fade>
            <Fade bottom>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
                component='div'>
                <ListItem>
                  <ListItemIcon>
                    <SendIcon sx={{ color: "green" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary='Promoting conflict resolutions skills'
                    primaryTypographyProps={{
                      fontFamily: "Montserrat",
                      color: "var(--textGray)",
                      fontSize: "1.18rem",
                    }}
                  />
                </ListItem>
              </List>

              <List
                sx={{ width: "100%", bgcolor: "background.paper" }}
                component='div'>
                <ListItem>
                  <ListItemIcon>
                    <SendIcon sx={{ color: "green" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary='Promoting family values'
                    primaryTypographyProps={{
                      fontFamily: "Montserrat",
                      color: "var(--textGray)",
                      fontSize: "1.18rem",
                    }}
                  />
                </ListItem>
              </List>
              <List
                sx={{ width: "100%", bgcolor: "background.paper" }}
                component='div'>
                <ListItem>
                  <ListItemIcon>
                    <SendIcon sx={{ color: "green" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary='Modeling Christ-like marriages'
                    primaryTypographyProps={{
                      fontFamily: "Montserrat",
                      color: "var(--textGray)",
                      fontSize: "1.18rem",
                    }}
                  />
                </ListItem>
              </List>
              <List
                sx={{ width: "100%", bgcolor: "background.paper" }}
                component='div'>
                <ListItem>
                  <ListItemIcon>
                    <SendIcon sx={{ color: "green" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary='Emphasizing biblical concept of courtship,marriage,parenting, and family Life.'
                    primaryTypographyProps={{
                      fontFamily: "Montserrat",
                      color: "var(--textGray)",
                      fontSize: "1.18rem",
                    }}
                  />
                </ListItem>
              </List>
              <List
                sx={{ width: "100%", bgcolor: "background.paper" }}
                component='div'>
                <ListItem>
                  <ListItemIcon>
                    <SendIcon sx={{ color: "green" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary='Equipping family with re-courses to face challenges,crisis,loss,and any kind of storm with victorious faith'
                    primaryTypographyProps={{
                      fontFamily: "Montserrat",
                      color: "var(--textGray)",
                      fontSize: "1.18rem",
                    }}
                  />
                </ListItem>
              </List>
              <List
                sx={{ width: "100%", bgcolor: "background.paper" }}
                component='div'>
                <ListItem>
                  <ListItemIcon>
                    <SendIcon sx={{ color: "green" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary='Providing a serene environment for knowledge upgrade in all aspect of family Life'
                    primaryTypographyProps={{
                      fontFamily: "Montserrat",
                      color: "var(--textGray)",
                      fontSize: "1.18rem",
                    }}
                  />
                </ListItem>
              </List>
            </Fade>
          </Container>
        </Box>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "var(--textWhite)",
            marginBottom: "3rem",
          }}>
          <Container maxWidth='md'>
            <QrCodeScannerIcon sx={{ color: "var(--bg3)" }} fontSize='large' />
            <Fade right>
              <Typography
                variant='h3'
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Monteserat",
                  color: "var(--bg3)",
                  textAlign: "center",
                  padding: 1,
                }}>
                OUR STRATEGY
              </Typography>
            </Fade>
            <Fade bottom>
              <List
                sx={{ width: "100%", bgcolor: "background.paper" }}
                component='div'>
                <ListItem>
                  <ListItemIcon>
                    <PlayArrowIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary='Holding Impactful quarterly seminar  Marriage on the Rock Seminar in an accessible venue within and outside the state/Nigeria'
                    primaryTypographyProps={{
                      fontFamily: "Montserrat",
                      color: "var(--textGray)",
                      fontSize: "1.18rem",
                    }}
                  />
                </ListItem>
              </List>
              <List
                sx={{ width: "100%", bgcolor: "background.paper" }}
                component='div'>
                <ListItem>
                  <ListItemIcon>
                    <PlayArrowIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary='Magazines, pamphlet, stickers, T-shirts, Books, CD’S and other materials that help focus on the Family will be made available.'
                    primaryTypographyProps={{
                      fontFamily: "Montserrat",
                      color: "var(--textGray)",
                      fontSize: "1.18rem",
                    }}
                  />
                </ListItem>
              </List>
              <List
                sx={{ width: "100%", bgcolor: "background.paper" }}
                component='div'>
                <ListItem>
                  <ListItemIcon>
                    <PlayArrowIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary='Bi-Annual weekend retreat for singles and married couples'
                    primaryTypographyProps={{
                      fontFamily: "Montserrat",
                      color: "var(--textGray)",
                      fontSize: "1.18rem",
                    }}
                  />
                </ListItem>
              </List>
              <List
                sx={{ width: "100%", bgcolor: "background.paper" }}
                component='div'>
                <ListItem>
                  <ListItemIcon>
                    <PlayArrowIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary='Strong social media presence,promotional videos'
                    primaryTypographyProps={{
                      fontFamily: "Montserrat",
                      color: "var(--textGray)",
                      fontSize: "1.18rem",
                    }}
                  />
                </ListItem>
              </List>
            </Fade>
          </Container>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default AboutPage;
