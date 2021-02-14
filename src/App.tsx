import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HashLine from "./Components/HashLin/HashLine"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
       <HashLine  />
       </Col>
       </Row>
       </Container>
  );
}

export default App;
