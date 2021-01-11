import { Shapes } from "../enums/shapes";
import { IShape } from "./Shape";

export interface ILine extends IShape {
  type: Shapes.Line;
  stroke?: string;
  strokeWidth: number;
  xPositionStart: number;
  yPositionStart: number;
  xPositionEnd: number;
  yPositionEnd: number;
}
