import { Box } from "@mui/material";
import React from "react";
import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";
import Map from "../../components/map/Map";
import NavBar from "../../components/navbar/NavBar";

const ContactPage = () => {
  return (
    <>
      <Box>
        <Box>
          <Box
            sx={{
              backgroundColor: "#9E8FB2",
            }}>
            <img
              src='https://thumbs.dreamstime.com/z/people-try-to-connect-27095228.jpg'
              alt='bg'
              style={{
                height: "300px",
                filter: "brightness(15%)",
                width: "100%",
              }}
            />
            <Box sx={{ top: 0, left: 0, right: 0, position: "absolute" }}>
              <NavBar />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "var(--textWhite)",
            display: { xs: "block", md: "flex" },
          }}>
          <Box sx={{ flex: 6 }}>
            <Form />
          </Box>

          <Box sx={{ flex: 6 }}>
            <img
              src='https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/186291814_5853830217968397_1377953589775631871_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=VCYPTgNO31wAX8dGoGt&_nc_ht=scontent-los2-1.xx&oh=00_AT_CmjUh_r-DUuYfaoaVb-Lsx4pzWV-7iM3_BMR68CbaUA&oe=6312C4A0'
              alt='papa&mama'
              style={{ height: "80%" }}
            />
          </Box>
        </Box>

        <Box>
          <Map />
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default ContactPage;
