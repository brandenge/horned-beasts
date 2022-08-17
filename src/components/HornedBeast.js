import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/HornedBeast1.css'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritesCount: 0 };
  }

  increment = () => {
    this.setState({ favoritesCount: this.state.favoritesCount + 1 });
  }

  render() {
    return (
      <Card className='card'>
        <Card.Img variant='top' src={this.props.imageUrl}
          onClick={this.increment} alt={this.props.description} title={this.props.title} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Footer>❤️ Number of Favorites: {this.state.favoritesCount}</Card.Footer>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
