import styled from "styled-components";

import { UNIT } from "../constants";

const Grid: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, ${UNIT});
`;

export default Grid;
