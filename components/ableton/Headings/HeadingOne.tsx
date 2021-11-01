import styled from "styled-components";

const HeadingOne: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.h1`
  font-size: ${30 / 16}rem;
  font-weight: var(--fw-bold);
  line-height: 1.4;
`;

export default HeadingOne;
