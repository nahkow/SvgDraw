import { Shapes } from "../enums/shapes";
import { IShape } from "./Shape";

export interface IRectangle extends IShape {
  type: Shapes.Rectangle;
  xPosition: number;
  yPosition: number;
  fill: string;
  width: number;
  height: number;
  borderRadius: number;
}
