import React, { Component } from 'react';
import ItemFilmCard from './itemFilmCard';
import axios from 'axios';

class ViewFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmData: null,
            isLoading: true,
            error: null,
        };
    }
    componentDidMount(){
        this.getFilmData();
    }
    getFilmData(){
        axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&i=tt3673794`)
            .then( ( { data } ) => {
                let filmData = {
                    title: data.Title,
                    description: data.Plot,
                    poster: data.Poster,
                }
                this.setState({
                    filmData,
                    isLoading: false
                })
            })
            .catch( err => {
                let error = err.response.data.Error;
                this.setState({
                    error,
                    isLoading: false
                })
            })
    }

    render() {
        let { isLoading, filmData, error } = this.state;

        return (
            <div className="container">
                <div className="row">
                    { error && <div className="col-12"><div className="alert alert-danger" role="alert">{ error }</div></div>}
                    { filmData && <ItemFilmCard {...filmData}/> }
                    { isLoading && <div className="fa-2x spinner-absolute-center"><i className="fas fa-spinner fa-spin"/></div> }
                </div>
            </div>
        )
    }
}

export default ViewFilm