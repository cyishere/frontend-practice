import styled from "styled-components";

const HeadingThree: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.h3`
  font-size: ${20 / 16}rem;
  font-weight: var(--fw-bold);
  line-height: 1.5;
`;

export default HeadingThree;
