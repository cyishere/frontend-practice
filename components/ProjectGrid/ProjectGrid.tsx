import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { ProjectTypes } from "data/projects";
import { QUERIES } from "@/styles/constants";

interface ProjectGridProps {
  project: ProjectTypes;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ project }) => {
  return (
    <Wrapper>
      <Content>
        <Title>{project.website}</Title>
        <Description>{project.webpage}</Description>

        {project.article ? (
          <BlogLink>
            I&#39;ve learned a lot and wrote{" "}
            <InlineLink href={project.article}>a blog post</InlineLink> about
            it.
          </BlogLink>
        ) : null}

        {project.points ? (
          <List>
            {project.points.map((point) => (
              <ListItem key={point}>{point}</ListItem>
            ))}
          </List>
        ) : null}

        <ButtonGroupWrapper>
          <Origin href={project.origin} target="_blank" rel="noreferrer">
            Original Website
          </Origin>
          {project.demo.includes("http") ? (
            <Demo href={project.demo}>My Clone Demo</Demo>
          ) : (
            <Link href={project.demo} passHref>
              <Demo>My Clone Demo</Demo>
            </Link>
          )}
        </ButtonGroupWrapper>
      </Content>
      <ScreenshotWrapper>
        <Screenshot>
          <Image
            src={project.screenshot}
            alt={project.website}
            width={1425}
            height={821}
            layout="responsive"
          />
        </Screenshot>
      </ScreenshotWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media ${QUERIES.largerThanPhone} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${QUERIES.largerThanTablet} {
    grid-template-columns: 1fr 2fr;
  }
`;

const Content = styled.div``;

const Title = styled.h3`
  font-family: var(--ff-heading);
  font-size: ${24 / 16}rem;
  font-weight: 700;
`;

const Description = styled.p`
  padding-bottom: 4px;
  border-bottom: 1px solid var(--clr-black);
  margin-bottom: 2rem;
`;

const BlogLink = styled.p`
  margin-bottom: 2rem;
`;

const InlineLink = styled.a`
  color: var(--clr-pink);
  text-decoration: underline;
`;

const List = styled.ul`
  list-style: revert;
  list-style-position: inside;
  margin-bottom: 2rem;
`;

const ListItem = styled.li`
  display: list-item;
  &:not(:last-of-type) {
    margin-bottom: 0.5em;
  }

  &::marker {
    color: plum;
  }
`;

const ButtonGroupWrapper = styled.div`
  width: 70%;
`;

const ButtonStyle = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
`;

const Origin = styled(ButtonStyle)`
  color: var(--clr-black);
  border-color: var(--clr-black);
  margin-bottom: 0.5rem;
`;

const Demo = styled(ButtonStyle)`
  color: var(--clr-white);
  border-color: var(--clr-orange);
  background-color: var(--clr-orange);
`;

const ScreenshotWrapper = styled.div``;

const Screenshot = styled.div`
  background-color: var(--clr-gray-100);
  box-shadow: var(--shadow-elevation-medium);
`;

export default ProjectGrid;
