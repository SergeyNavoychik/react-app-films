import React, { Component } from 'react';
import Header from './components/common/header';
import Footer from './components/common/footer';
import ListOfFilms from './components/listOfFilms/listOfFilms';

class App extends Component {
  render() {
    return (
        <div className="app-container">
            <Header/>
            <main>
                <ListOfFilms/>
            </main>
            <Footer/>
        </div>
    );
  }
}

export default App;
