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
import { IShape } from "./shared/interfaces/Shape";
import { Shapes } from "./shared/enums/shapes";

const App: FC = function App() {
  const [shapes, setShapes] = useState<Array<IShape>>([]);
  const [shapesCount, setShapesCount] = useState({
    rectangle: 0,
    line: 0,
    circle: 0,
  });

  const updateShapesCounter = (prop: "rectangle" | "line" | "circle") => {
    let obj = shapesCount;
    obj[prop] = obj[prop] + 1;
    setShapesCount(obj);
  };

  const addRectangle = () => {
    const arr = shapes;
    arr.push(newRectangle({ id: shapesCount.rectangle }));
    setShapes([...arr]);
    updateShapesCounter("rectangle");
  };

  const addCircle = () => {
    const arr = shapes;
    arr.push(newCircle({ id: shapesCount.circle }));
    setShapes([...arr]);
    updateShapesCounter("circle");
  };

  const addLine = () => {
    const arr = shapes;
    arr.push(newLine({ id: shapesCount.line }));
    setShapes([...arr]);
    updateShapesCounter("line");
  };

  const removeShape = (key: number) => {
    const arr = shapes;
    arr.splice(key, 1);
    setShapes([...arr]);
  };

  const updateShape = (key: number, values: IShape) => {
    const arr = shapes;
    arr[key] = values;
    setShapes([...arr]);
  };

  return (
    <Container>
      <SvgCanvas>
        {shapes?.map((props) => {
          if (props.type === Shapes.Rectangle)
            return <Rectangle {...(props as IRectangle)} />;
          if (props.type === Shapes.Circle)
            return <Circle {...(props as ICircle)} />;
          if (props.type === Shapes.Line) return <Line {...(props as ILine)} />;
        })}
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
        {shapes?.map((props, index) => {
          if (props.type === Shapes.Rectangle)
            return (
              <RectangleController
                id={props.id}
                onUpdate={(values) => updateShape(index, values)}
                onDelete={() => removeShape(index)}
                values={props as IRectangle}
              />
            );
          if (props.type === Shapes.Circle)
            return (
              <CircleController
                id={props.id}
                onUpdate={(values) => updateShape(index, values)}
                onDelete={() => removeShape(index)}
                values={props as ICircle}
              />
            );
          if (props.type === Shapes.Line)
            return (
              <LineController
                id={props.id}
                onUpdate={(values) => updateShape(index, values)}
                onDelete={() => removeShape(index)}
                values={props as ILine}
              />
            );
        })}
      </Box>
    </Container>
  );
};

export default App;
