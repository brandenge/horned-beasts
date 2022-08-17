import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggles: {
        header: true,
        footer: true
      }
    };
  }

  toggler = e => {
    const tagName = e.target.parentElement.tagName.toLowerCase();
    this.state.toggles[tagName] = !this.state.toggles[tagName];
    this.setState(this.state);
  }

  render = () => {
    return (
      <>
        <Header handleClick={this.toggler} isToggled={this.state.toggles.header} />
        <Main />
        <Footer handleClick={this.toggler} isToggled={this.state.toggles.footer} />
      </>
    );
  }
}

export default App;
