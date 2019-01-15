import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from './store/index';
import Header from './components/common/header';
import Footer from './components/common/footer';

const Home = lazy( () => import('./components/common/home') );
const Dashboard = lazy( () => import('./components/dashboard/dashboard') );
const ListOfFilms = lazy( () => import('./components/listOfFilms/listOfFilms') );
const EditFilm = lazy( () => import('./components/editFilm/editFilm') );
const FilmInfo = lazy( () => import('./components/filmInfo/filmInfo') );

function App () {
    return (
        <Provider store={ store }>
            <Router basename="/">
                <div className="app-container">
                    <Header/>
                    <main>
                        <div className="container">
                            <Suspense fallback={<div>Loading...</div>}>
                                <Switch>
                                    <Route path="/" exact component={Home} />
                                    <Route path="/dashboard" component={Dashboard} />
                                    <Route path="/list" component={ListOfFilms} />
                                    <Route path="/edit/:id" component={EditFilm} />
                                    <Route path="/film-info/:id" component={FilmInfo} />
                                </Switch>
                            </Suspense>
                        </div>
                    </main>
                    <Footer/>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
