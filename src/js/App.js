import React, { Component } from 'react';
import Header from './components/common/header';
import Footer from './components/common/footer';
import ViewFilm from './components/viewFilm';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <main>
                <div className="container">
                    <ViewFilm/>
                </div>
            </main>
            <Footer/>
        </div>
    );
  }
}

export default App;
