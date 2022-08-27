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
    title: "pix1",
  },
  {
    img: "assets/resize/m2.png",
    title: "pix2",
  },
  {
    img: "assets/resize/m3.png",
    title: "pix3",
  },
  {
    img: "assets/resize/m4.png",
    title: "pix4",
  },
  {
    img: "assets/resize/m5.png",
    title: "pix5",
  },
  {
    img: "assets/resize/m6.png",
    title: "pix6",
  },
  {
    img: "assets/resize/m9.png",
    title: "pix7",
  },
  {
    img: "assets/resize/m7.png",
    title: "pix8",
  },
  {
    img: "assets/resize/m8.png",
    title: "pix9",
  },
  {
    img: "assets/resize/m10.png",
    title: "pix10",
  },
  {
    img: "assets/resize/m11.png",
    title: "pix11",
  },
  {
    img: "assets/resize/m12.jpg",
    title: "pix12",
  },
  {
    img: "assets/resize/m13.jpg",
    title: "pix13",
  },
  {
    img: "assets/resize/m14.jpg",
    title: "pix14",
  },
  {
    img: "assets/resize/m15.jpg",
    title: "pix15",
  },
  {
    img: "assets/resize/m16.png",
    title: "pix16",
  },
  {
    img: "assets/resize/m17.jpg",
    title: "pix17",
  },
  {
    img: "assets/resize/m18.jpg",
    title: "pix18",
  },
  {
    img: "assets/resize/m19.jpg",
    title: "pix19",
  },
  {
    img: "assets/resize/m20.jpg",
    title: "pix20",
  },
  {
    img: "assets/resize/m21.jpg",
    title: "pix21",
  },

  {
    img: "assets/1/DSC02837.jpg",
    title: "pix25",
  },
  {
    img: "assets/1/DSC02838.jpg",
    title: "pix26",
  },

  {
    img: "assets/1/DSC02852.jpg",
    title: "pix28",
  },
  {
    img: "assets/1/DSC02855.jpg",
    title: "pix29",
  },
  {
    img: "assets/1/DSC02874.jpg",
    title: "pix30",
  },
  {
    img: "assets/1/DSC02878.jpg",
    title: "pix31",
  },
  {
    img: "assets/1/DSC02881.jpg",
    title: "pix32",
  },
  {
    img: "assets/1/DSC02888.jpg",
    title: "pix33",
  },
  {
    img: "assets/1/DSC02897.jpg",
    title: "pix34",
  },
  {
    img: "assets/1/DSC02902.jpg",
    title: "pix35",
  },
  {
    img: "assets/1/DSC02912.jpg",
    title: "pix36",
  },

  {
    img: "assets/1/DSC02948.jpg",
    title: "pix38",
  },
  {
    img: "assets/1/DSC02949.jpg",
    title: "pix39",
  },
  {
    img: "assets/1/DSC02950.jpg",
    title: "pix40",
  },
  {
    img: "assets/1/DSC02972.jpg",
    title: "pix41",
  },
  {
    img: "assets/2/1.png",
    title: "pix42",
  },
  {
    img: "assets/2/2.png",
    title: "pix43",
  },
  {
    img: "assets/2/3.png",
    title: "pix44",
  },
  {
    img: "assets/2/4.png",
    title: "pix45",
  },
  {
    img: "assets/2/5.png",
    title: "pix46",
  },
  {
    img: "assets/2/6.png",
    title: "pix47",
  },
  {
    img: "assets/2/7.png",
    title: "pix48",
  },
  {
    img: "assets/2/8.png",
    title: "pix49",
  },
  {
    img: "assets/2/9.png",
    title: "pix50",
  },
  {
    img: "assets/2/10.png",
    title: "pix51",
  },
  {
    img: "assets/2/11.png",
    title: "pix52",
  },
  {
    img: "assets/2/12.png",
    title: "pix53",
  },
  {
    img: "assets/2/13.png",
    title: "pix54",
  },
  {
    img: "assets/2/14.png",
    title: "pix55",
  },
  {
    img: "assets/2/15.png",
    title: "pix56",
  },
  {
    img: "assets/2/16.png",
    title: "pix57",
  },
  {
    img: "assets/2/17.png",
    title: "pix58",
  },
  {
    img: "assets/2/18.png",
    title: "pix59",
  },
  {
    img: "assets/2/19.png",
    title: "pix60",
  },
  {
    img: "assets/2/20.png",
    title: "pix61",
  },
  {
    img: "assets/2/21.png",
    title: "pix62",
  },
  {
    img: "assets/p1.jpeg",
    title: "pix63",
  },
  {
    img: "assets/p2.jpeg",
    title: "pix64",
  },
  {
    img: "assets/p3.jpeg",
    title: "pix65",
  },
  {
    img: "assets/p4.jpeg",
    title: "pix66",
  },
  {
    img: "assets/p5.jpeg",
    title: "pix67",
  },
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
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
