import styled from "styled-components";
import Image from "next/image";

import { Grid } from "../Grid";

const Video: React.FC = () => {
  return (
    <Grid>
      <Wrapper>
        <VideoWrapper>
          <Image
            src="/images/video-cover.jpeg"
            alt=""
            width={786}
            height={442}
            layout="responsive"
          />
          <PlayIcon>
            <PlayCircle />
          </PlayIcon>
        </VideoWrapper>
        <Captain>Why Ableton - Juanpe Bolivar</Captain>
      </Wrapper>
    </Grid>
  );
};

const Wrapper = styled.figure`
  grid-column: 4 / 10;
`;

const VideoWrapper = styled.div`
  position: relative;
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

const Captain = styled.figcaption`
  font-size: ${14 / 16}rem;
  font-weight: var(--fw-bold);
  margin-top: 0.5em;
`;

export default Video;
