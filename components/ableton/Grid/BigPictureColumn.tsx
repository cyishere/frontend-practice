import styled from "styled-components";
import { Grid } from ".";

const BigPictureColumn: React.FC = ({ children }) => {
  return (
    <Grid>
      <Container>{children}</Container>
    </Grid>
  );
};

const Container = styled.section`
  grid-column: 2 / 12;
  position: relative;
  width: 100%;
  height: 805px;
`;

export default BigPictureColumn;
