import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import GalleryPhoto1 from "../assets/SOR1.jpg";
import GalleryPhoto2 from "../assets/SOR2.jpg";
import GalleryPhoto3 from "../assets/SOR3.jpg";
import GalleryPhoto5 from "../assets/SOR5.jpg";
import GalleryPhoto6 from "../assets/SOR6.jpg";
import GalleryPhoto7 from "../assets/SOR7.jpg";
import GalleryPhoto8 from "../assets/SOR8.jpg";
import GalleryPhoto9 from "../assets/SOR9.jpg";
import GalleryPhoto10 from "../assets/SOR10.jpg";
import GalleryPhoto11 from "../assets/SOR11.jpg";
import GalleryPhoto12 from "../assets/SOR12.jpg";
import GalleryPhoto13 from "../assets/SOR13.jpg";
import GalleryPhoto14 from "../assets/SOR14.jpg";
import GalleryPhoto15 from "../assets/SOR15.jpg";
import GalleryPhoto16 from "../assets/SOR16.jpg";
import GalleryPhoto17 from "../assets/SOR17.jpg";
import GalleryPhoto18 from "../assets/SOR18.jpg";
import GalleryPhoto19 from "../assets/SOR19.jpg";
import GalleryPhoto20 from "../assets/SOR20.jpg";
import GalleryPhoto21 from "../assets/SOR21.jpg";



const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const images = [
  {
    original: GalleryPhoto21,
    thumbnail: GalleryPhoto21,
  },
  {
    original: GalleryPhoto20,
    thumbnail: GalleryPhoto20,
  },
  {
    original: GalleryPhoto19,
    thumbnail: GalleryPhoto19,
  },
  {
    original: GalleryPhoto18,
    thumbnail: GalleryPhoto18,
  },
  {
    original: GalleryPhoto17,
    thumbnail: GalleryPhoto17,
  },
  {
    original: GalleryPhoto16,
    thumbnail: GalleryPhoto16,
  },
  {
    original: GalleryPhoto15,
    thumbnail: GalleryPhoto15,
  },
  {
    original: GalleryPhoto11,
    thumbnail: GalleryPhoto11,
  },
  {
    original: GalleryPhoto12,
    thumbnail: GalleryPhoto12,
  },
  {
    original: GalleryPhoto13,
    thumbnail: GalleryPhoto13,
  },
  {
    original: GalleryPhoto14,
    thumbnail: GalleryPhoto14,
  },
  {
    original: GalleryPhoto10,
    thumbnail: GalleryPhoto10,
  },
  {
    original: GalleryPhoto9,
    thumbnail: GalleryPhoto9,
  },
  {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8,
  },
  {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>Happy</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
