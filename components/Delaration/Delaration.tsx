import { Fragment, useState } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { AlertOctagon, X } from "react-feather";

import { COLORS, QUERIES } from "@/styles/constants";
import UnstyledButton from "../UnstyledButton";

interface DelarationIconProps {
  text: string;
  href: string;
}

const DelarationIcon: React.FC<DelarationIconProps> = ({ text, href }) => {
  const [isOpen, setIsOpen] = useState(true);

  const onDismiss = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <MoreButton onClick={onDismiss}>
        <AlertOctagon size={36} />
      </MoreButton>

      <Overlay isOpen={isOpen}>
        <Content>
          <p>
            This is a clone version of the{" "}
            <Anchor href={href} target="_blank" rel="noreferrer">
              {text}
            </Anchor>{" "}
            which I made for learning purpose. Go to{" "}
            <Link href="/" passHref>
              <Anchor>my project list</Anchor>
            </Link>
            .
          </p>
          <CloseButton onClick={onDismiss}>
            <X size={36} />
          </CloseButton>
        </Content>
      </Overlay>
    </Fragment>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const bounceIn = keyframes`
  0% {
    filter: blur(10px);
    transform: scale(0);
  }
  100% {
    filter: blur(0px);
    transform: scale(1);
  }
`;

const MoreButton = styled(UnstyledButton)`
  width: 50px;
  height: 50px;
  color: var(--clr-pink);
  background-color: var(--clr-white);
  border-radius: 50%;
  box-shadow: var(--shadow-elevation-medium);

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  right: 1rem;
  bottom: 20vh;

  &:hover {
    color: var(--clr-black);
  }

  svg {
    display: block;
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsl(${COLORS.black} / 0.7);

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${fadeIn} 500ms;
  perspective: 500px;
`;

const Content = styled(DialogContent)`
  font-family: "Poppins", sans-serif;
  font-size: ${20 / 16}rem;
  line-height: 1.5;
  width: 90%;
  background-color: var(--clr-white);
  padding: 3rem;
  border-radius: 1rem;
  position: relative;
  filter: blur(10px);
  transform: scale(0);

  animation: ${bounceIn} 300ms;
  animation-timing-function: cubic-bezier(0.28, 0.51, 0.94, 0.73);
  animation-delay: 100ms;
  animation-fill-mode: forwards;

  @media ${QUERIES.largerThanTablet} {
    width: 50%;
  }
`;

const Anchor = styled.a`
  color: var(--clr-pink);
  border-bottom: 2px solid currentColor;
  /* padding: 1px; */

  &:hover {
    border-color: transparent;
  }
`;

const CloseButton = styled(UnstyledButton)`
  color: var(--clr-white);
  width: 44px;
  height: 44px;
  position: absolute;
  right: 1rem;
  top: 0;
  transform: translateY(-100%);
`;

export default DelarationIcon;
