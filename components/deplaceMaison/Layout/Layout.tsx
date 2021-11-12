import { Fragment, useEffect, useRef, useState } from "react";

import SEO from "@/components/SEO";
import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const cursor = useRef<HTMLDivElement>(null);
  const cursorCircles = useRef<HTMLDivElement[]>(new Array());

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    addEventListener();
    return () => removeEventListner();
  }, []);

  const addEventListener = () => {
    document.addEventListener("mousemove", onMouseMove);
  };

  const removeEventListner = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  const TAIL_LENGTH = 20;

  let loopHelper: number[] = [];
  for (let i = 0; i < TAIL_LENGTH; i++) {
    loopHelper.push(i);
  }

  let cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });

  const onMouseMove = (event: MouseEvent) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);

    cursorHistory.shift();
    cursorHistory.push({ x: mouseX, y: mouseY });

    for (let i = 0; i < TAIL_LENGTH; i++) {
      let current = cursorHistory[i];
      let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];

      let xDiff = next.x - current.x;
      let yDiff = next.y - current.y;

      current.x += xDiff * 0.35;
      current.y += yDiff * 0.35;

      cursorCircles.current[i].style.transform = `translate(${current.x}px, ${
        current.y
      }px) scale(${i / TAIL_LENGTH})`;

      console.log(current.x, current.y);
    }
  };

  return (
    <Fragment>
      <SEO title="Déplacé Maison" pathname="/deplace-maison" />
      <Wrapper>{children}</Wrapper>
      <Cursor ref={cursor}>
        {loopHelper.map((i) => (
          <CursorCircle
            key={i}
            ref={(element: HTMLDivElement) =>
              cursorCircles.current.push(element)
            }
          />
        ))}
      </Cursor>
      <GlobalStyles />
    </Fragment>
  );
};

const Wrapper = styled.div`
  padding-top: 1.5vw;
`;

const Cursor = styled.div`
  position: fixed;
  top: calc(var(--cursor-size) * -0.5);
  left: calc(var(--cursor-size) * -0.5);
  pointer-events: none;
  mix-blend-mode: difference;
  filter: url(/images/deplace-maison/gooey.svg#goo);
`;

const CursorCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: var(--cursor-size);
  height: var(--cursor-size);
  border-radius: var(--cursor-size);
  background-color: var(--clr-light-khaki);
  transform-origin: center center;
`;

export default Layout;
