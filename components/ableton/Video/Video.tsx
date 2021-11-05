import { CSSProperties, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Iframe from "react-iframe";

import { Grid } from "../Grid";
import { QUERIES } from "../constants";

const Video: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Grid>
      <Wrapper>
        <VideoWrapper
          style={{ "--display": showVideo ? "none" : "block" } as CSSProperties}
          onClick={() => setShowVideo(!showVideo)}
        >
          <Image
            src="/images/ableton/video-cover.jpeg"
            alt=""
            width={786}
            height={442}
            layout="responsive"
          />
          <PlayIcon>
            <PlayCircle />
          </PlayIcon>
        </VideoWrapper>

        <IFrameWrapper
          style={{ "--display": showVideo ? "block" : "none" } as CSSProperties}
        >
          <Iframe
            url="https://www.youtube.com/watch?v=9SbnhgjeyXA"
            width="100%"
            height="442"
          />
        </IFrameWrapper>
        <Captain>Why Ableton - Juanpe Bolivar</Captain>
      </Wrapper>
    </Grid>
  );
};

const Wrapper = styled.figure`
  grid-column: 4 / 10;
  position: relative;
  height: auto;

  @media ${QUERIES.underLarge} {
    grid-column: 3 / -3;
  }

  @media ${QUERIES.tabletAndSmaller} {
    grid-column: 2 / -2;
  }
`;

const VideoWrapper = styled.div`
  /* opacity: var(--opacity); */
  display: var(--display);
  cursor: pointer;
`;

const PlayIcon = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PlayCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--clr-light-blue);
  display: grid;
  place-content: center;

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-color: transparent transparent transparent var(--clr-white);
    border-width: 16px 32px 16px 32px;
    border-style: solid;
    transform: translateX(30%);
  }
`;

const IFrameWrapper = styled.div`
  display: var(--display);
`;

const Captain = styled.figcaption`
  font-size: ${14 / 16}rem;
  font-weight: var(--fw-bold);
  margin-top: 0.5em;
`;

export default Video;
