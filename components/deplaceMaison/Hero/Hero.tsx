import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

import { ALBUMS } from "data/deplaceMaison";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <Wrapper>
      <Section>
        <Heading>
          Spring,
          <br />
          Summer
          <Vol>
            Coll.
            <br />
            2021
          </Vol>
        </Heading>

        <AlbumWrapper>
          {ALBUMS.map((album) => (
            <Album key={album.id}>
              <Link href="/deplace-maison" passHref>
                <CoverWrapper>
                  <Image
                    src={album.cover}
                    alt={`Link to ${album.name}`}
                    layout="responsive"
                    width={455}
                    height={650}
                  />
                </CoverWrapper>
              </Link>
              <Info>
                <Num>({album.id})</Num>
                <Name>{album.name}</Name>
              </Info>
            </Album>
          ))}
        </AlbumWrapper>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20vw 1fr 10vw;
  margin-bottom: 18.75vw;
`;

const Section = styled.section`
  grid-column: 2 / -2;
  text-align: right;
`;

const Heading = styled.h1`
  font-size: 14vw;
  line-height: 12.8vw;
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  margin-bottom: 1vw;
  clear: both;
`;

const Vol = styled.span`
  font-size: 4vw;
  line-height: 0.875;
  float: right;
  margin-top: 0.5em;
  margin-left: 0.25em;
`;

const AlbumWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 35px;
`;

const Album = styled.div``;

const CoverWrapper = styled.a`
  display: block;
  border: 3px solid var(--clr-black);
  margin-bottom: 6px;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Num = styled.span`
  position: absolute;
  top: 0;
  left: 0;
`;

const Name = styled.h2``;

export default Hero;
