import styled from "styled-components";

const Paragraph: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.p`
  font-size: ${20 / 16}rem;
  font-weight: var(--fw-normal);
  line-height: 1.5;
`;

export default Paragraph;
