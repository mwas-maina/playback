import React from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./form.scss";
function InputForm() {
  return (
    <Form autoComplete="off">
      <FormGroup>
        <Input
          type="text"
          name="product"
          id="product"
          placeholder="Search Products"
        />
      </FormGroup>
    </Form>
  );
}
export default InputForm;
