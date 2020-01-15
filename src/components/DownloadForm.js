import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import LanguageDropDownMenu from "./LanguageDropdown";

function DownloadForm() {
  return (
    <Form>
      <Row>
        <Col sm>
          {" "}
          <LanguageDropDownMenu
            label="Source"
            name="source_lang"
            languages={["english", "french"]}
          />
        </Col>
        <Col sm>
          <LanguageDropDownMenu
            label="Target"
            name="target_lang"
            languages={["yemba", "nguiemboon"]}
          />
        </Col>
        <Button variant="outline-success" type="submit">
          Pull Data
        </Button>
      </Row>
    </Form>
  );
}

export default DownloadForm;
