import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { Row, Container, Col, Button, Form, FormGroup, Nav } from 'react-bootstrap';

const header = (<Navbar bg="dark">
    <Container>
        <Navbar.Brand href="#home">Lingua</Navbar.Brand>
        <Nav defaultActiveKey="#home" as="ul">
            <Nav.Item as="li">
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="#">About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="#">Contact</Nav.Link>
            </Nav.Item>
        </Nav>
    </Container>
</Navbar>);

const instructions = (<Form>
    <Row>
        <Col sm>  <FormGroup>
            <Form.Label>Source</Form.Label>
            <Form.Control as="select" name="source_lang">
                <option>francais</option>
                <option>english</option>
            </Form.Control>
        </FormGroup></Col>
        <Col sm><FormGroup>
            <label>Target</label>
            <Form.Control as="select" name="target_lang">
                <option>yemba</option>
                <option>nguiemboon</option>
            </Form.Control>
        </FormGroup></Col>
    </Row>
    <Button variant="outline-success" type="submit">Pull Data</Button>
</Form>);
function App() {
    return (
        <div className="App">
            {header}
            <Container>
                <h1>Download a dataset</h1>
                <p className="lead">..</p>
                {instructions}
            </Container>
        </div>
    );
}

export default App;
