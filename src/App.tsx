import { Box, Button, Container } from "@material-ui/core";
import React, { FC, useState } from "react";
import SvgCanvas from "./shared/components/SvgCanvas.component";
import { IRectangle } from "./shared/interfaces/Rectangle";
import { ILine } from "./shared/interfaces/Line";
import { ICircle } from "./shared/interfaces/Circle";
import { Flex } from "./styles/Flex";
import { Rectangle, Circle, Line } from "./shared/components/Elements";
import {
  RectangleController,
  LineController,
  CircleController,
} from "./shared/components/Controllers";
import { newLine, newCircle, newRectangle } from "./shared/utils";

const App: FC = function App() {
  const [shapes, setShapes] = useState<Array<IRectangle| ICircle| ILine>>
  const [rectangles, setRectangles] = useState<IRectangle[]>([]);
  const [circles, setCircles] = useState<ICircle[]>([]);
  const [lines, setLines] = useState<ILine[]>([]);

  const addRectangle = () => {
    const arr = rectangles;
    arr.push(newRectangle());
    setRectangles([...arr]);
  };

  const addCircle = () => {
    const arr = circles;
    arr.push(newCircle());
    setCircles([...arr]);
  };

  const addLine = () => {
    const arr = lines;
    arr.push(newLine());
    setLines([...arr]);
  };

  const removeRectangle = (key: number) => {
    console.log("Called");
    const arr = rectangles;
    arr.splice(key, 1);
    setRectangles([...arr]);
  };

  const removeLine = (key: number) => {
    const arr = lines;
    arr.splice(key, 1);
    setLines([...arr]);
  };

  const removeCircle = (key: number) => {
    const arr = circles;
    arr.splice(key, 1);
    setCircles([...arr]);
  };

  const updateRectangle = (key: number, values: IRectangle) => {
    const arr = rectangles;
    arr[key] = values;
    setRectangles([...arr]);
  };

  const updateCircle = (key: number, values: ICircle) => {
    const arr = circles;
    arr[key] = values;
    setCircles([...arr]);
  };

  const updateLine = (key: number, values: ILine) => {
    const arr = lines;
    arr[key] = values;
    setLines([...arr]);
  };

  return (
    <Container>
      <SvgCanvas>
        {rectangles?.map((props) => (
          <Rectangle {...props} />
        ))}
        {lines?.map((props) => (
          <Line {...props} />
        ))}
        {circles?.map((props) => (
          <Circle {...props} />
        ))}
      </SvgCanvas>
      <Flex>
        <Button color="primary" onClick={() => addCircle()} variant="contained">
          Add Circle
        </Button>
        <Button
          color="primary"
          onClick={() => addRectangle()}
          variant="contained"
        >
          Add Rectangle
        </Button>
        <Button color="primary" onClick={() => addLine()} variant="contained">
          Add Line
        </Button>
      </Flex>
      <Box>
        {rectangles?.map((rectangle, index) => {
          return (
            <RectangleController
              id={index}
              onUpdate={(values) => updateRectangle(index, values)}
              onDelete={() => removeRectangle(index)}
              values={rectangle}
            />
          );
        })}
        {circles?.map((circle, index) => {
          return (
            <CircleController
              id={index}
              onUpdate={(values) => updateCircle(index, values)}
              onDelete={() => removeCircle(index)}
              values={circle}
            />
          );
        })}
        {lines?.map((line, index) => {
          return (
            <LineController
              id={index}
              onUpdate={(values) => updateLine(index, values)}
              onDelete={() => removeLine(index)}
              values={line}
            />
          );
        })}
      </Box>
    </Container>
  );
};

export default App;
