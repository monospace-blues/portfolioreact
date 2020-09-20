import React from 'react';
// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// Components
import PortfolioDis from '../components/PortfolioDis.js';


function Portfolio () {

  return (
    <div>
      <Container>
        <Row>
          <PortfolioDis/>
        </Row>
      </Container>
    </div>
  )
}

export default Portfolio; 