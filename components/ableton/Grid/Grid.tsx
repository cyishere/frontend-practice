import styled from "styled-components";

const Grid: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 8.33rem);
`;

export default Grid;
