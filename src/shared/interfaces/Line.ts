import { IShape } from "./shape";

export interface ILine extends IShape {
  type: "Line";
  stroke?: string;
  strokeWidth: number;
  xPositionStart: number;
  yPositionStart: number;
  xPositionEnd: number;
  yPositionEnd: number;
}
