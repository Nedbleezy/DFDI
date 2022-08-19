import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Modal from "@mui/material/Modal";
import { Container } from "@mui/material";
import "./Gallery.css";

const itemData = [
  {
    img: "assets/m1.png",
    title: "Bed",
  },
  {
    img: "assets/resize/m2.jpg",
    title: "Books",
  },
  {
    img: "assets/resize/m3.jpg",
    title: "Sink",
  },
  {
    img: "assets/resize/m4.jpg",
    title: "Kitchen",
  },
  {
    img: "assets/resize/m5.jpg",
    title: "Blinds",
  },
  {
    img: "assets/resize/m6.jpg",
    title: "Chairs",
  },
  {
    img: "assets/resize/m9.jpg",
    title: "Laptop",
  },
  {
    img: "assets/resize/m7.jpg",
    title: "Doors",
  },
  {
    img: "assets/resize/m8.jpg",
    title: "Coffee",
  },
  {
    img: "assets/resize/m10.png",
    title: "Storage",
  },
  {
    img: "assets/resize/m11.png",
    title: "Candle",
  },
  {
    img: "assets/resize/m12.jpg",
    title: "Coffee table",
  },
  {
    img: "assets/resize/m13.jpg",
    title: "Coffee table",
  },
  {
    img: "assets/resize/m14.jpg",
    title: "Coffee table",
  },
  {
    img: "assets/resize/m15.jpg",
    title: "Coffee table",
  },
  {
    img: "assets/resize/m16.jpg",
    title: "Coffee table",
  },
  {
    img: "assets/resize/m17.jpg",
    title: "Coffee table",
  },
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 10,
  p: 2,
};
const Gallary = () => {
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState("");

  const handleModal = (itemData) => {
    setImage(itemData);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <Container maxWidth='xl'>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <img
            src={`${image}?w=248&fit=crop&auto=format`}
            srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt='img'
            loading='lazy'
            style={{ backgroundPosition: "center" }}
          />
        </Box>
      </Modal>{" "}
      <Box
        sx={{
          width: { xs: "98%", md: 1000 },
          height: { xs: 200, md: 400 },
          overflowY: "scroll",
          margin: "0 auto",
        }}>
        <ImageList variant='masonry' cols={3} gap={8} sx={{ cols: { xs: 1 } }}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading='lazy'
                onClick={() => handleModal(item.img)}
                style={{ cursor: "pointer" }}
                className='modally'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
};

export default Gallary;
