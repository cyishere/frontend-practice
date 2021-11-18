import styled from "styled-components";

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <Intro>Not a long time ago in a developer&#39;s portfolio...</Intro>
      <Heading>
        <The>
          <TheText>The</TheText>
        </The>
        <Clone>Clone</Clone>
        <Webs>Webs</Webs>
      </Heading>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  background-color: var(--clr-black);
  background-image: url(/images/space.png);
  background-position: center center;
  background-size: cover;
  padding: 3rem 1rem 4.5rem 1rem;
`;

const Intro = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: ${24 / 16}rem;
  color: var(--clr-blue);
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-family: var(--ff-star-wars);
  font-size: 8rem;
  line-height: 0.8;
  color: var(--clr-yellow);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & > * {
    display: block;
  }
`;

const The = styled.span`
  font-size: 2rem;
  width: 27rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &::before,
  &::after {
    content: "";
    background-color: var(--clr-yellow);
    width: 30%;
    height: 1.6rem;
    flex: 1;
  }
`;

const TheText = styled.em`
  font-style: normal;
`;

const Clone = styled.span``;

const Webs = styled.span``;

export default Hero;
