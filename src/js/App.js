import React, { Component } from 'react';
import Header from './components/common/header';
import Footer from './components/common/footer';
import ViewFilm from './components/viewFilm';

class App extends Component {
  render() {
    return (
        <div className="app-container">
            <Header/>
            <main>
                <ViewFilm/>
            </main>
            <Footer/>
        </div>
    );
  }
}

export default App;
