import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Title from '../components/Title';
import MyInfo from '../components/MyInfo.js';


function AboutMe() {
  return (
    <div>
      <Row>
        <Col>
          <Title/>
        </Col>  
      </Row>
      <Row>
        <Col>
          <MyInfo/>
        </Col>
      </Row>
    </div>

  );
}

export default AboutMe; 