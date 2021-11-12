import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Position {
  x: number;
  y: number;
}

const INITIAL_POSITION_STATE = { x: 0, y: 0 };
const TAIL_LENGTH = 20;

const Cursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState<Position>(
    INITIAL_POSITION_STATE
  );
  const [current, setCurrent] = useState<Position>(INITIAL_POSITION_STATE);
  const [next, setNext] = useState<Position>(INITIAL_POSITION_STATE);
  const [cursorHistory, setCursorHistory] = useState(
    Array(TAIL_LENGTH).fill(INITIAL_POSITION_STATE)
  );

  const cursorCircles = useRef<HTMLDivElement[]>(new Array());

  useEffect(() => {
    addEventListener();
    // updateCursor();

    return () => removeEventListner();
  }, []);

  const addEventListener = () => {
    document.addEventListener("mousemove", onMouseMove, false);
  };

  const removeEventListner = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  let loopHelper: number[] = [];
  for (let i = 0; i < TAIL_LENGTH; i++) {
    loopHelper.push(i);
  }

  function onMouseMove(event: MouseEvent) {
    console.log("event:", event);
    setCursorPosition({ x: event.clientX, y: event.clientY });
    console.log(cursorPosition);

    const [_, ...rest] = cursorHistory;
    setCursorHistory([...rest, cursorPosition]);

    for (let i = 0; i < TAIL_LENGTH; i++) {
      setCurrent(cursorHistory[i]);
      setNext(cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1]);

      let xDiff = next.x - current.x;
      let yDiff = next.y - current.y;

      setCurrent({
        x: current.x + xDiff * 0.35,
        y: current.y + yDiff * 0.35,
      });
    }
  }

  return (
    <Wrapper>
      {loopHelper.map((i) => (
        <CursorCircle
          key={i}
          ref={(element: HTMLDivElement) => cursorCircles.current.push(element)}
          style={{
            transform: `translate(${current.x}px, ${current.y}px) scale(${
              i / TAIL_LENGTH
            })`,
          }}
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
