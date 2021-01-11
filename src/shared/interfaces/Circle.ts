import { Shapes } from "../enums/shapes";
import { IShape } from "./Shape";

export interface ICircle extends IShape {
  type: Shapes.Circle;
  xPosition: number;
  yPosition: number;
  fill: string;
  radius: number;
}
