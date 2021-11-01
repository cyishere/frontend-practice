import styled from "styled-components";
import { Grid } from ".";

const TextColumn: React.FC = ({ children }) => {
  return (
    <Grid>
      <Container>{children}</Container>
    </Grid>
  );
};

const Container = styled.section`
  grid-column: 4 / 10;
  padding-top: 8.33rem;
  padding-bottom: 8.33rem;
`;

export default TextColumn;
