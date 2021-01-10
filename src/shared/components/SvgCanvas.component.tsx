import * as React from "react";
import styled from "styled-components";

var Canvas = styled.div`
  border: 1px solid;
  height: 50vh;
  margin-top: 1vh;
`;

const SvgCanvas: React.FunctionComponent = (props) => {
  return (
    <Canvas>
      <svg height="100%" width="100%">
        {props.children}
      </svg>
    </Canvas>
  );
};
export default SvgCanvas;
