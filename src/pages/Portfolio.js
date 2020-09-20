import React from 'react';
// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components
import Title from '../components/Title';
import PortfolioData from '../components/PortfolioData.js';


function Portfolio () {

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Title/>
          </Col>  
        </Row>
        <Row>
          <PortfolioData/>
        </Row>
      </Container>
    </div>
  )
}

export default Portfolio;