import { Box, Divider, Link } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import * as React from "react";
import { Flex } from "../../../styles/Flex";
import { ICircle } from "../../interfaces/Circle";

interface CircleControllerProps {
  values: ICircle;
  id: number;
  onUpdate: (values: ICircle) => void;
  onDelete: () => void;
}

export const CircleController: React.FunctionComponent<CircleControllerProps> = (
  props
) => {
  return (
    <Box>
      <Flex>
        <Box>
          <h3>Circle {props.id} </h3>
        </Box>
        <Link onClick={() => props.onDelete()}>Delete</Link>
      </Flex>
      <Formik initialValues={props.values} onSubmit={() => {}}>
        {(formikProps) => (
          <Form
            style={{ maxWidth: "400px" }}
            onBlur={(e) => props.onUpdate(formikProps.values)}
          >
            <Flex>
              <Box>
                <label style={{ paddingRight: "10px" }}>Color:</label>
                <Field id="fill" name="fill"></Field>
              </Box>
            </Flex>
            <Flex>
              <Box>
                <label style={{ paddingRight: "10px" }}>Left:</label>
                <Field id="xPosition" name="xPosition"></Field>
              </Box>
              <Box>
                <label style={{ paddingRight: "10px" }}>Radius:</label>
                <Field id="radius" name="radius"></Field>
              </Box>
            </Flex>
            <Flex>
              <Box>
                <label style={{ paddingRight: "10px" }}>Top:</label>
                <Field id="yPosition" name="yPosition"></Field>
              </Box>
            </Flex>
          </Form>
        )}
      </Formik>
      <Divider />
    </Box>
  );
};
