import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Position {
  x: number;
  y: number;
}

const INITIAL_POSITION_STATE = { x: 0, y: 0 };
const TAIL_LENGTH = 20;

let loopHelper: number[] = [];
for (let i = 0; i < TAIL_LENGTH; i++) {
  loopHelper.push(i);
}

const Cursor: React.FC = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const cursorHistoryRef = useRef<Position[]>(
    Array(TAIL_LENGTH).fill(INITIAL_POSITION_STATE)
  );
  const currentRef = useRef<Position | null>(null);
  const nextRef = useRef<Position | null>(null);

  const xDiffRef = useRef<number | null>(null);
  const yDiffRef = useRef<number | null>(null);

  const cursorCircles = useRef<HTMLDivElement[]>(new Array());

  const animationRef = useRef<number | null>(null);

  function onMouseMove(event: MouseEvent) {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  }

  function updateCursor() {
    cursorHistoryRef.current.shift();
    cursorHistoryRef.current.push({ x: mouseX, y: mouseY });

    for (let i = 0; i < TAIL_LENGTH; i++) {
      currentRef.current = cursorHistoryRef.current[i];
      nextRef.current =
        cursorHistoryRef.current[i + 1] ||
        cursorHistoryRef.current[TAIL_LENGTH - 1];

      xDiffRef.current = nextRef.current.x - currentRef.current.x;
      yDiffRef.current = nextRef.current.y - currentRef.current.y;

      currentRef.current.x += xDiffRef.current * 0.5;
      currentRef.current.y += yDiffRef.current * 0.5;

      cursorCircles.current[i].style.transform = `
        translate(${currentRef.current.x}px, ${currentRef.current.y}px) scale(${
        i / TAIL_LENGTH
      })
      `;

      animationRef.current = requestAnimationFrame(updateCursor);
    }
  }

  const addEventListener = () => {
    document.addEventListener("mousemove", onMouseMove, false);
  };

  const removeEventListner = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  useEffect(() => {
    addEventListener();
    // updateCursor();

    return () => {
      removeEventListner();
      cancelAnimationFrame(animationRef.current!);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouseX, mouseY]);

  return (
    <Wrapper>
      {loopHelper.map((i) => (
        <CursorCircle
          key={i}
          ref={(element: HTMLDivElement) => cursorCircles.current.push(element)}
          // style={{
          //   transform: `translate(${
          //     currentRef.current ? currentRef.current.x : 0
          //   }px, ${currentRef.current ? currentRef.current.y : 0}px) scale(${
          //     i / TAIL_LENGTH
          //   })`,
          // }}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
  transition: transform 100ms ease;
  will-change: transform;
`;

export default Cursor;
