import { Shapes } from "../enums/shapes";
import { ICircle } from "../interfaces/Circle";

export const newCircle = (circle?: Partial<ICircle>): ICircle => ({
  type: Shapes.Circle,
  fill: circle?.fill || "black",
  xPosition: circle?.xPosition || 50,
  yPosition: circle?.yPosition || 50,
  radius: circle?.radius || 50,
  id: circle?.id || 0,
});
