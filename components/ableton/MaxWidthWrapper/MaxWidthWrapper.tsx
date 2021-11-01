import styled from "styled-components";

const MaxWidthWrapper: React.FC = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

const Wrapper = styled.div`
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--clr-white);
`;

export default MaxWidthWrapper;
