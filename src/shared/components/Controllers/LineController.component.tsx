import { Box, Divider, Link } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import * as React from "react";
import { Flex } from "../../../styles/Flex";
import { ILine } from "../../interfaces/Line";

interface LineControllerProps {
  values: ILine;
  id: number;
  onUpdate: (values: ILine) => void;
  onDelete: () => void;
}

export const LineController: React.FunctionComponent<LineControllerProps> = (
  props
) => {
  return (
    <Box>
      <Flex>
        <Box>
          <h3>Line {props.id} </h3>
        </Box>
        <Link onClick={() => props.onDelete()}>Delete</Link>
      </Flex>
      <Formik initialValues={props.values} onSubmit={() => {}}>
        {(formikProps) => (
          <Form
            style={{ maxWidth: "440px" }}
            onBlur={(e) => props.onUpdate(formikProps.values)}
          >
            <Flex>
              <Box>
                <label style={{ paddingRight: "10px" }}>Color:</label>
                <Field id="stroke" name="stroke"></Field>
              </Box>
              <Box>
                <label style={{ paddingRight: "10px" }}>Thickness:</label>
                <Field id="strokeWidth" name="strokeWidth"></Field>
              </Box>
            </Flex>
            <Flex>
              <Box>
                <label style={{ paddingRight: "10px" }}>x1:</label>
                <Field id="xPositionStart" name="xPositionStart"></Field>
              </Box>
              <Box>
                <label style={{ paddingRight: "10px" }}>x2:</label>
                <Field id="xPositionEnd" name="xPositionEnd"></Field>
              </Box>
            </Flex>
            <Flex>
              <Box>
                <label style={{ paddingRight: "10px" }}>y1:</label>
                <Field id="yPositionStart" name="yPositionStart"></Field>
              </Box>
              <Box>
                <label style={{ paddingRight: "10px" }}>y2:</label>
                <Field id="yPositionEnd" name="yPositionEnd"></Field>
              </Box>
            </Flex>
          </Form>
        )}
      </Formik>
      <Divider />
    </Box>
  );
};
