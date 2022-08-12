import React, { useEffect, useState, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Container, Box, Typography, Divider } from "@mui/material";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const NavRef = useRef(null);

  const openSideBar = () => {
    setToggle(() => !toggle);
  };

  useEffect(() => {
    const navHeight = NavRef.current.getBoundingClientRect().height;

    const stickyNav = () => {
      if (Math.floor(window.pageYOffset) > navHeight) {
        NavRef.current?.classList?.add("sticky");
      } else if (Math.floor(window.pageYOffset < navHeight)) {
        NavRef.current?.classList?.remove("sticky");
      }
    };
    window.addEventListener("scroll", stickyNav);
    return () => {
      window.removeEventListener("scroll", stickyNav);
    };
  }, []);

  return (
    <Container
      ref={NavRef}
      maxWidth='xl'
      sx={{
        padding: ".5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: { xs: 4, sm: 3, md: 2 },
        transition: "all 0.6s ease",
      }}>
      <NavLink to='/'>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}>
          <div>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Great",
                fontWeight: "bold",
                fontSize: { xs: ".9rem", md: "1.3rem" },
                display: { xs: "none", md: "block" },
              }}>
              DELIGHTFUL FAMILY
            </Typography>
            <Typography
              sx={{
                marginTop: "-5.8px",
                fontSize: { xs: ".5rem", md: ".7rem" },
                marginLeft: { xs: "15px", md: "19px" },
                color: "#fff",
                fontFamily: "Great",
                fontWeight: "bold",
                display: { xs: "none", md: "block" },
              }}>
              DEVELOPMENT INITIATIVE
            </Typography>
          </div>
          <Box>
            <img
              src='assets/dfdi-logo.png'
              alt='logo'
              style={{ width: "55px", height: "55px" }}
            />
          </Box>
        </Box>
      </NavLink>
      <div>
        <Box
          sx={{
            fontSize: "1rem",
            color: "#fff",
            justifyContent: "space-around",
            display: {
              md: "flex",
              xs: "none",
            },
          }}>
          <Link to='/'>
            <Box
              sx={{
                marginRight: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                padding: ".8rem",
                transition: "all 0.5s ease",
                "&:hover": {
                  backgroundColor: "#40c087",
                  borderRadius: "1rem",
                  color: "#f5f0eb",
                },
              }}>
              HOME
            </Box>
          </Link>
          <NavLink to='/about'>
            <Box
              sx={{
                marginRight: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                padding: ".8rem",
                transition: "all 0.5s ease",
                "&:hover": {
                  backgroundColor: "#40c087",
                  borderRadius: "1rem",
                  color: "#f5f0eb",
                },
              }}>
              WHO WE ARE
            </Box>
          </NavLink>
          <Link to='/team'>
            <Box
              sx={{
                marginRight: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                padding: ".8rem",
                transition: "all 0.5s ease",
                "&:hover": {
                  backgroundColor: "#40c087",
                  borderRadius: "1rem",
                  color: "#f5f0eb",
                },
              }}>
              OUR TEAM
            </Box>
          </Link>
          <Link to='/contact'>
            <Box
              sx={{
                marginRight: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                padding: ".8rem",
                transition: "all 0.5s ease",
                "&:hover": {
                  backgroundColor: "#40c087",
                  borderRadius: "1rem",
                  color: "#f5f0eb",
                },
              }}>
              CONTACT US
            </Box>
          </Link>
        </Box>
        {/* NAV toggle */}
        <Box>
          <MenuIcon
            sx={{
              fontSize: "2rem",
              color: "#fff",
              transition: "all 0.6s ease",
              display: { md: "none", xs: "block" },
              cursor: "pointer",
            }}
            onClick={openSideBar}
          />
          {toggle && (
            <Box
              sx={{
                backgroundColor: "var(--swat9)",
                height: "100vh",
                padding: 2,
                width: "60%",
                zIndex: 250,
                position: "absolute",
                top: 0,
                right: 0,
                transition: "all .6s ease-out",
                display: { xs: "block", md: "none" },
              }}>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <CloseIcon
                  onClick={openSideBar}
                  sx={{
                    color: "#fff",
                    fontSize: "2.45rem",
                    cursor: "pointer",
                  }}
                />
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "grid",
                  padding: 2,
                  placeItems: "center",
                }}>
                <Box
                  sx={{
                    marginBottom: 3,
                    marginTop: 3,
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    "&:hover": { color: "gold", cursor: "pointer" },
                  }}>
                  {" "}
                  <Link to='/'>HOME</Link>
                </Box>
                <Box
                  sx={{
                    marginBottom: 3,
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    "&:hover": { color: "gold", cursor: "pointer" },
                  }}>
                  {" "}
                  <Link to='/about'>ABOUT US</Link>
                </Box>
                <Box
                  sx={{
                    marginBottom: 3,
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    "&:hover": { color: "gold", cursor: "pointer" },
                  }}>
                  {" "}
                  <Link to='/team'>OUR TEAM</Link>
                </Box>
                <Box
                  sx={{
                    marginBottom: 3,
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    "&:hover": { color: "gold", cursor: "pointer" },
                  }}>
                  {" "}
                  <Link to='/contact'>CONTACT US</Link>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </div>
    </Container>
  );
};

export default NavBar;
