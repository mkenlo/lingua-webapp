import React from "react";
import { Form, FormGroup } from "react-bootstrap";

function LanguageDropDownMenu(props) {
  const options = props.languages.map(lang => (
    <option key={lang.id} value={lang.name}>
      {lang.name}
    </option>
  ));
  return (
    <FormGroup>
      <Form.Label htmlFor={props.name}>{props.label}</Form.Label>
      <Form.Control as="select" name={props.name}>
        {options}
      </Form.Control>
    </FormGroup>
  );
}
export default LanguageDropDownMenu;
