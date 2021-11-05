import styled from "styled-components";
import { Grid } from ".";
import { QUERIES } from "../constants";

const TextColumn: React.FC = ({ children }) => {
  return (
    <Grid>
      <Container>{children}</Container>
    </Grid>
  );
};

const Container = styled.section`
  grid-column: 4 / 10;
  padding-top: 8.33vw;
  padding-bottom: 8.33vw;

  @media ${QUERIES.underLarge} {
    grid-column: 3 / -3;
  }

  @media ${QUERIES.tabletAndSmaller} {
    grid-column: 2 / -2;
  }
`;

export default TextColumn;
