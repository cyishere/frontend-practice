import { ISSUES } from "data/backstagetalks";
import { useEffect, useState } from "react";

const COLORS = ISSUES.map((issue) => issue.color);

const useChangeBackground = () => {
  const [bgColor, setBgColor] = useState(COLORS[0]);

  useEffect(() => {
    const changePosition = () => {
      if (window !== undefined) {
        const screenHeight = window.innerHeight;

        if (window.scrollY / screenHeight < 0.5) {
          setBgColor(COLORS[0]);
        } else if (window.scrollY / screenHeight < 1.5) {
          setBgColor(COLORS[1]);
        } else if (window.scrollY / screenHeight < 2.5) {
          setBgColor(COLORS[2]);
        } else if (window.scrollY / screenHeight < 3.5) {
          setBgColor(COLORS[3]);
        } else if (window.scrollY / screenHeight < 4.5) {
          setBgColor(COLORS[4]);
        }
      }
    };

    window.addEventListener("scroll", changePosition);

    return () => {
      window.removeEventListener("scroll", changePosition);
    };
  }, [bgColor]);

  return bgColor;
};

export default useChangeBackground;
