import { IShape } from "./shape";

export interface ICircle extends IShape {
  type: "Circle";
  xPosition: number;
  yPosition: number;
  fill: string;
  radius: number;
}
