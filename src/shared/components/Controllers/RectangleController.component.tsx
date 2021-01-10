import { Box, Divider, Link } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import * as React from "react";
import { Flex } from "../../../styles/Flex";
import { IRectangle } from "../../interfaces/Rectangle";

interface RectangleControllerProps {
  values: IRectangle;
  id: number;
  onUpdate: (values: IRectangle) => void;
  onDelete: () => void;
}

export const RectangleController: React.FunctionComponent<RectangleControllerProps> = (
  props
) => {
  return (
    <Box>
      <Flex>
        <Box>
          <h3>Rectangle {props.id} </h3>
        </Box>
        <Link onClick={() => props.onDelete()}>Delete</Link>
      </Flex>
      <Formik initialValues={props.values} onSubmit={() => {}}>
        {(formikProps) => (
          <Form
            style={{ maxWidth: "400px" }}
            onBlur={(e) => props.onUpdate(formikProps.values)}
          >
            <Box>
              <label style={{ paddingRight: "10px" }}>Color:</label>
              <Field id="fill" name="fill"></Field>
            </Box>
            <Flex>
              <Box>
                <label style={{ paddingRight: "10px" }}>Left:</label>
                <Field id="xPosition" name="xPosition"></Field>
              </Box>
              <Box>
                <label style={{ paddingRight: "10px" }}>Width:</label>
                <Field id="width" name="width"></Field>
              </Box>
            </Flex>
            <Flex>
              <Box>
                <label style={{ paddingRight: "10px" }}>Top:</label>
                <Field id="yPosition" name="yPosition"></Field>
              </Box>
              <Box>
                <label style={{ paddingRight: "10px" }}>Height:</label>
                <Field id="height" name="height"></Field>
              </Box>
            </Flex>
          </Form>
        )}
      </Formik>
      <Divider />
    </Box>
  );
};
