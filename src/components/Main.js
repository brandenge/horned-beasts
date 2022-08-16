import React from 'react';
import HornedBeast from './HornedBeast';
import hornedBeasts from '../data.json';

class Main extends React.Component {

  render() {
    const hornedBeastComponents = hornedBeasts.map(hornedBeast => {
      return <HornedBeast
                title={hornedBeast.title}
                imageUrl={hornedBeast.image_url}
                description={hornedBeast.description}
                key={hornedBeast._id} />
    });
    return <>{hornedBeastComponents}</>
  }
}

export default Main;
