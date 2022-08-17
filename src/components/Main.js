import React from 'react';
import HornedBeast from './HornedBeast';
import hornedBeasts from '../data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends React.Component {

  render = () => {
    const hornedBeastComponents = hornedBeasts.map(hornedBeast => {
      return (
        <Col style={{padding: '0px'}} key={hornedBeast._id}>
          <HornedBeast
            title={hornedBeast.title}
            imageUrl={hornedBeast.image_url}
            description={hornedBeast.description}/>
        </Col>
      )
    });
    return (
      <Container>
        <Row sm={1} md={2} lg={3} xl={4} xxl={5}>
          {hornedBeastComponents}
        </Row>
      </Container>
    )
  }
}

export default Main;
