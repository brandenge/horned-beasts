import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
