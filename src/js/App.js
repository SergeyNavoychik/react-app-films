import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from './store/index';
import Header from './components/common/header';
import Footer from './components/common/footer';
import ListOfFilms from './components/listOfFilms/listOfFilms';
import Dashboard from './components/dashboard/dashboard';
import EditFilm from './components/editFilm/editFilm';
import Home from './components/common/home';

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <Router>
                    <div className="app-container">
                        <Header/>
                        <main>
                            <div className="container">
                                <Switch>
                                    <Route path="/" exact component={Home} />
                                    <Route path="/dashboard" component={Dashboard} />
                                    <Route path="/list" component={ListOfFilms} />
                                    <Route path="/edit/:id" component={EditFilm} />
                                </Switch>
                            </div>
                        </main>
                        <Footer/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
