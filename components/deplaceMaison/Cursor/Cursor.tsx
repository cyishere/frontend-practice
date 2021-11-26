import { useEffect, useRef } from "react";
import styled from "styled-components";

/**
 * @typedef {{ x: number, y: number}} Position x/y position of cursor
 */
interface Position {
  x: number;
  y: number;
}

/**
 * @type {Position} INITIAL_POSITION_STATE the initial position of the cursor
 */
const INITIAL_POSITION_STATE = { x: 0, y: 0 };

/**
 * @constant {number} TAIL_LENGTH how many sub-elements to form the cursor tail
 */
const TAIL_LENGTH = 20;

/**
 * @member {Array.<number>} loopHelper a helper variable for looping over and creating the sub-element-tails
 */
let loopHelper: number[] = [];
for (let i = 0; i < TAIL_LENGTH; i++) {
  loopHelper.push(i);
}

/**
 * The main cursor component
 * @returns JSX
 */
const Cursor: React.FC = () => {
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);

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
    mouseXRef.current = event.clientX;
    mouseYRef.current = event.clientY;
  }

  function updateCursor() {
    cursorHistoryRef.current.shift();
    cursorHistoryRef.current.push({
      x: mouseXRef.current,
      y: mouseYRef.current,
    });

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
    }

    animationRef.current = requestAnimationFrame(updateCursor);
  }

  const addEventListener = () => {
    document.addEventListener("mousemove", onMouseMove, false);
  };

  const removeEventListner = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  useEffect(() => {
    addEventListener();
    updateCursor();

    return () => {
      removeEventListner();
      cancelAnimationFrame(animationRef.current!);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      {loopHelper.map((i) => (
        <CursorCircle
          key={i}
          ref={(element: HTMLDivElement) => cursorCircles.current.push(element)}
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
