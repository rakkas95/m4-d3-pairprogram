import { render } from '@testing-library/react';
import React from 'react'




class warningSign extends React.Component {
    render() {
      return (
        <>
          <Container>
            <Row>
              <Col xs={6}>
                          <Alert variant="danger" className="mt-5">
                              <p>{this.props.title}</p>
                </Alert>{" "}
              </Col>
            </Row>
          </Container>
        </>
      );
    }
  }
export default warningSign;
  
import React from 'react'
import { Container, Row, Alert, Col } from "react-bootstrap";

warningSign() {
    return (
        <div>
            
        </div>
    )
}
export default warningSign;
  