import styled from "styled-components";

interface ButtonProps {
  display?: string;
}

const UnstyledButton = styled.button<ButtonProps>`
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: center;
  font: inherit;
  color: inherit;

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export default UnstyledButton;
