import { ILine } from "../interfaces/Line";

export const newLine = (line?: Partial<ILine>): ILine => ({
  stroke: line?.stroke || "blue",
  strokeWidth: line?.strokeWidth || 2,
  xPositionStart: line?.xPositionStart || 10,
  yPositionStart: line?.yPositionStart || 10,
  xPositionEnd: line?.xPositionEnd || 200,
  yPositionEnd: line?.yPositionEnd || 10,
});
