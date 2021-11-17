import styled from "styled-components";

const TextLink = styled.a`
  display: inline-block;
  color: inherit;
  background-image: linear-gradient(var(--clr-green-300), var(--clr-green-300));
  background-size: 100% 40%;
  background-repeat: no-repeat;
  background-position: bottom center;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  transition: background 0.35s;

  &:hover {
    background-size: 100% 100%;
  }
`;

export default TextLink;
