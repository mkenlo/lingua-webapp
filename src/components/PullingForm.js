import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import LanguageDropDownMenu from "./LanguageDropdown";

function sortLanguages(data) {
  let sources = [];
  let targets = [];

  data.map(function(lang) {
    if (lang.type.match("local")) {
      targets.push(lang);
    }
    if (lang.type.match("foreign")) {
      sources.push(lang);
    }
  });

  return [sources, targets];
}

function PullingForm(props) {
  let [sources, targets] = sortLanguages(props.languages);

  return (
    <section id="pulling-form">
      <h1>Download a dataset</h1>
      <p className="lead">
        Choose input Source language and Target Language to pull a dataset{" "}
      </p>
      <Form onSubmit={props.onSubmit}>
        <Row>
          <Col sm>
            <LanguageDropDownMenu
              label="Source"
              name="source_lang"
              languages={sources}
            />
          </Col>
          <Col sm>
            <LanguageDropDownMenu
              label="Target"
              name="target_lang"
              languages={targets}
            />
          </Col>
          <Col sm>
            <Button
              variant="outline-success"
              type="submit"
              className="sm-margin"
            >
              Pull Data
            </Button>
          </Col>
        </Row>
      </Form>
    </section>
  );
}

export default PullingForm;
