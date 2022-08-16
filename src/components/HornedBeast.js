import React from 'react';
import '../styles/hornedbeast.css'

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
      <>
        <h2>{this.props.title}</h2>
        <img onClick={this.increment} src={this.props.imageUrl} alt={this.props.description} title={this.props.title} />
        <div>❤️ Number of Favorites: {this.state.favoritesCount}</div>
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;
