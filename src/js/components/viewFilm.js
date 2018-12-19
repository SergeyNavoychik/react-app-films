import React, { Component } from 'react'
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
        axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&t=kingdom`)
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
            <div className="row">
                { error && <div className="alert alert-danger" role="alert">{ error }</div>}
                { !isLoading && !error && <ItemFilmCard {...filmData}/> }
                { isLoading && <div className="fa-1x col-12 text-center"><i className="fas fa-spinner fa-spin"/></div> }
            </div>
        )
    }
}

export default ViewFilm