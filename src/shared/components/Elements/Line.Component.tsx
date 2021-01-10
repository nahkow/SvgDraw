import * as React from "react";
import { ILine } from "../../interfaces/Line";

export const Line: React.FunctionComponent<ILine> = ({
  xPositionStart,
  yPositionStart,
  xPositionEnd,
  yPositionEnd,
  strokeWidth,
  stroke = "black",
}) => {
  return (
    <line
      x1={xPositionStart}
      y1={yPositionStart}
      x2={xPositionEnd}
      y2={yPositionEnd}
      stroke={stroke}
      stroke-width={strokeWidth}
    />
  );
};
