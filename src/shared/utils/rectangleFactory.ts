import { Shapes } from "../enums/shapes";
import { IRectangle } from "../interfaces/Rectangle";

export const newRectangle = (rectangle?: Partial<IRectangle>): IRectangle => ({
  type: Shapes.Rectangle,
  borderRadius: rectangle?.borderRadius || 0,
  fill: rectangle?.fill || "red",
  width: rectangle?.width || 10,
  xPosition: rectangle?.xPosition || 10,
  yPosition: rectangle?.yPosition || 10,
  height: rectangle?.height || 50,
  id: rectangle?.id || 0,
});
