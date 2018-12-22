import React, { Component } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import ItemFilm from './itemFilm';
import EditFilm from './editFilm';

class ListOfFilms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmsData: [],
            viewType: 'list',
            filmDataForEdit: null,
            isLoading: true,
            error: null,
        };
    }
    componentDidMount(){
        this.getFilmsData();
    }
    getFilmsData = () => {
        axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=game`)
            .then( ( { data } ) => {
                let filmsData = data.Search;
                this.setState({
                    filmsData,
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
    handleEditFilm = filmDataForEdit => {
        this.setState({
            filmDataForEdit,
            viewType: 'editList'
        });
    }
    handleCloseEdit = () => {
        this.setState({
            viewType: 'list',
            filmDataForEdit: null
        });
    }
    handleSaveEditResults = newFilmData => {
        let filmsData = this.state.filmsData.map( film => {
            if(film.imdbID === newFilmData.imdbID) return newFilmData;
            else return film;
        })
        this.setState({
            filmsData,
            viewType: 'list',
            filmDataForEdit: null
        })
    }
    mapFilmsData = ( item ) => {
        return <ItemFilm
                    key={item.imdbID}
                    onClickEditFilm={this.handleEditFilm}
                    filmData={item}/>
    }
    render() {
        let { isLoading, filmsData, error, viewType, filmDataForEdit } = this.state;

        return (
            <div className="container">
                <div className={ classNames( 'row', { 'justify-content-center': viewType === 'editList' } ) }>
                    { isLoading && <div className="fa-2x spinner-absolute-center"><i className="fas fa-spinner fa-spin"/></div> }
                    { error && <div className="col-12"><div className="alert alert-danger" role="alert">{ error }</div></div>}
                    { viewType === 'list' && filmsData.map( this.mapFilmsData ) }
                    { viewType === 'editList' && <EditFilm
                                                        onClose={ this.handleCloseEdit}
                                                        onSave={ this.handleSaveEditResults }
                                                        filmData={filmDataForEdit}/> }
                </div>
            </div>
        )
    }
}

export default ListOfFilms;