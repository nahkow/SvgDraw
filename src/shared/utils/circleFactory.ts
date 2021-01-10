import { ICircle } from "../interfaces/Circle";

export const newCircle = (circle?: Partial<ICircle>): ICircle => ({
  fill: circle?.fill || "black",
  xPosition: circle?.xPosition || 50,
  yPosition: circle?.yPosition || 50,
  radius: circle?.radius || 50,
});
