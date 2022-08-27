import React from "react";
import {
  Box,
  Container,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AccessibleIcon from "@mui/icons-material/Accessible";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import styles from "./styles.module.css";

const Section1 = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth='xl'
        sx={{ padding: 3, display: { xs: "block", md: "flex" }, gap: 1 }}>
        <Box
          className={styles.Img}
          sx={{
            padding: 3,
            height: "100%",
            backgroundColor: "rgba(122, 62, 12, 0.6)",
          }}>
          <Box
            sx={{
              transition: "all 0.6s ease",
              cursor: "pointer",
              "&:hover": { transform: "scale(1.1)" },
            }}>
            <Box sx={{ textAlign: "center", color: "#fff" }}>
              <RemoveRedEyeIcon
                fontSize='large'
                sx={{
                  transition: "all 0.6s ease",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              />
            </Box>

            <Divider />
            <Typography
              gutterBottom
              variant='h4'
              sx={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "Montserrat",
              }}>
              OUR VISION
            </Typography>
            <Typography
              variant='h6'
              sx={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "Montserrat",
                fontSize: "16px",
              }}>
              Promoting happy family life and enriching relationships.
            </Typography>
          </Box>
        </Box>
        <Box
          className={styles.Img}
          sx={{
            padding: 3,
            height: "100%",
            backgroundColor: "var(--swat10)",
          }}>
          <Box
            sx={{
              transition: "all 0.6s ease",
              cursor: "pointer",
              "&:hover": { transform: "scale(1.1)" },
            }}>
            <Box sx={{ textAlign: "center", color: "#fff" }}>
              <FamilyRestroomIcon
                fontSize='large'
                sx={{
                  transition: "all 0.6s ease",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              />
            </Box>

            <Divider />
            <Typography
              variant='h4'
              gutterBottom
              sx={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "Montserrat",
              }}>
              OUR MISSION
            </Typography>
            <Typography
              variant='h6'
              sx={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "Montserrat",
                fontSize: "16px",
              }}>
              To equip families with needed resources, and groom those
              contemplating marriage for a successful Christ centered home.
            </Typography>
          </Box>
        </Box>
        <Box
          className={styles.Img}
          sx={{
            padding: 3,
            height: "100%",
            backgroundColor: "rgba(14, 14, 50, 0.671)",
          }}>
          <Box
            sx={{
              transition: "all 0.6s ease",
              cursor: "pointer",
              "&:hover": { transform: "scale(1.1)" },
            }}>
            <Box sx={{ textAlign: "center", color: "#fff" }}>
              <UpcomingIcon
                fontSize='large'
                sx={{
                  transition: "all 0.6s ease",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              />
            </Box>

            <Divider />
            <Typography
              variant='h4'
              gutterBottom
              sx={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "Montserrat",
              }}>
              OUR CORE VALUES
            </Typography>
            <List
              sx={{ width: "100%", bgcolor: "background.paper" }}
              component='div'>
              <ListItem>
                <ListItemIcon>
                  <SelfImprovementIcon sx={{ color: "green" }} />
                </ListItemIcon>
                <ListItemText
                  primary=' Faith and Fun'
                  sx={{ fontFamily: "Montserrat", fontSize: "1.9rem" }}
                  primaryTypographyProps={{
                    fontFamily: "Montserrat",
                    color: "var(--textGray)",
                  }}
                />
              </ListItem>
            </List>
            <List
              sx={{ width: "100%", bgcolor: "background.paper" }}
              component='div'>
              <ListItem>
                <ListItemIcon>
                  <VolunteerActivismIcon sx={{ color: "green" }} />
                </ListItemIcon>
                <ListItemText
                  primary='Affirmation and Appreciation'
                  sx={{ fontFamily: "Montserrat", fontSize: "1.9rem" }}
                  primaryTypographyProps={{
                    fontFamily: "Montserrat",
                    color: "var(--textGray)",
                  }}
                />
              </ListItem>
            </List>
            <List
              sx={{ width: "100%", bgcolor: "background.paper" }}
              component='div'>
              <ListItem>
                <ListItemIcon>
                  <AccessibilityIcon sx={{ color: "green" }} />
                </ListItemIcon>
                <ListItemText
                  primary=' Mutual respect'
                  sx={{ fontFamily: "Montserrat", fontSize: "1.9rem" }}
                  primaryTypographyProps={{
                    fontFamily: "Montserrat",
                    color: "var(--textGray)",
                  }}
                />
              </ListItem>
            </List>
            <List
              sx={{ width: "100%", bgcolor: "background.paper" }}
              component='div'>
              <ListItem>
                <ListItemIcon>
                  <AccessibleIcon sx={{ color: "green" }} />
                </ListItemIcon>
                <ListItemText
                  primary='  Integrity'
                  sx={{ fontFamily: "Montserrat", fontSize: "1.9rem" }}
                  primaryTypographyProps={{
                    fontFamily: "Montserrat",
                    color: "var(--textGray)",
                  }}
                />
              </ListItem>
            </List>
            <List
              sx={{ width: "100%", bgcolor: "background.paper" }}
              component='div'>
              <ListItem>
                <ListItemIcon>
                  <FavoriteIcon sx={{ color: "green" }} />
                </ListItemIcon>
                <ListItemText
                  primary='Love'
                  sx={{ fontFamily: "Montserrat", fontSize: "1.9rem" }}
                  primaryTypographyProps={{
                    fontFamily: "Montserrat",
                    color: "var(--textGray)",
                  }}
                />
              </ListItem>
            </List>
            <List
              sx={{ width: "100%", bgcolor: "background.paper" }}
              component='div'>
              <ListItem>
                <ListItemIcon>
                  <EmojiPeopleIcon sx={{ color: "green" }} />
                </ListItemIcon>
                <ListItemText
                  primary='Yielded-ness to the Holy Spirit in the family'
                  sx={{ fontFamily: "Montserrat", fontSize: "1.9rem" }}
                  primaryTypographyProps={{
                    fontFamily: "Montserrat",
                    color: "var(--textGray)",
                  }}
                />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Section1;

