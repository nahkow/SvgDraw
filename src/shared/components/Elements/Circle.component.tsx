import * as React from "react";
import { ICircle } from "../../interfaces/Circle";

export const Circle: React.FunctionComponent<ICircle> = ({
  xPosition,
  yPosition,
  fill,
  radius,
}) => {
  return <circle fill={fill} cx={xPosition} cy={yPosition} r={radius} />;
};
