import { IShape } from "./shape";

export interface IRectangle extends IShape {
  type: "Rectangle";
  xPosition: number;
  yPosition: number;
  fill: string;
  width: number;
  height: number;
  borderRadius: number;
}
