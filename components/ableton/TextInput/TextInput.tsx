import VisuallyHidden from "@/components/VisuallyHidden";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  buttonText: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  buttonText,
  children,
  ...delegated
}) => {
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input {...delegated} />
      <Button>{buttonText}</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  font-family: var(--ff-primary);
  font-size: ${20 / 16}rem;
  font-weight: var(--fw-normal);
  color: inherit;
  background-color: var(--clr-darker-light-gray);
  padding: 8px 18px;
  padding-top: 10px;
  border: none;
  flex: 1;

  &::placeholder {
    color: hsl(0deg 0% 0% / 0.3);
  }
`;

const Button = styled.button`
  font-family: var(--ff-primary);
  font-size: ${20 / 16}rem;
  font-weight: var(--fw-normal);
  color: var(--clr-white);
  background-color: var(--clr-light-blue);
  padding: 8px 30px;
  padding-top: 10px;
  border: none;
`;

export default TextInput;
