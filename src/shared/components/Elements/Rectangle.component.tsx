import * as React from "react";
import { IRectangle } from "../../interfaces/Rectangle";

export const Rectangle: React.FunctionComponent<IRectangle> = ({
  xPosition,
  yPosition,
  fill,
  width,
  height,
  borderRadius = 0,
}) => {
  return (
    <rect
      x={xPosition}
      y={yPosition}
      width={width}
      height={height}
      rx={borderRadius}
      fill={fill}
    />
  );
};
