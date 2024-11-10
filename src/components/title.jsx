import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import {
  WEDDING_DATE,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";
import BackgroundVideo from "../assets/love_full.mp4";
import GroovePaper from "../assets/GroovePaper.png";

const Layout = styled.div`
  width: 70%;
  overflow: hidden;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 42px;
  font-weight: 500 !important;
  color: var(--title-color);
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const VideoPlayer = ({ src }) => {
  const [shouldAutoplay, setShouldAutoplay] = useState(false);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('videoPlayed');
    if (!hasPlayed) {
      setShouldAutoplay(true);
      sessionStorage.setItem('videoPlayed', true);
    }
  }, []);

  return (
    <StyledVideo controls autoPlay={shouldAutoplay}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </StyledVideo>
  );
};

const WeddingInvitation = styled.p`
  font-size: 0.825rem;
  opacity: 0.45;
  margin-bottom: 16px;
`;

const GroomBride = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 16px;
`;

const Schedule = styled.p`
  font-size: 1.06rem;
  opacity: 0.65;
  margin-bottom: 24px;
`;
const Title = () => {
  return (
    <Layout>
      <TitleWrapper>
        <WeddingInvitation>Grace,Peace and Love</WeddingInvitation>
        <GroomBride>
          {GROOM_NAME} &#38; {BRIDE_NAME}
        </GroomBride>
        <Schedule>
          {WEDDING_DATE}
          <br />
          {WEDDING_LOCATION}
        </Schedule>
      </TitleWrapper>
      <VideoPlayer src={BackgroundVideo} />
    </Layout>
  );
};

export default Title;
