import React, { Component } from 'react';
import classNames from 'classnames';
import withFetchedData from '../../helpers/withFetchedData';
import ItemFilm from './itemFilm';
import EditFilm from './editFilm';

class ListOfFilms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewType: 'list',
            filmDataForEdit: null,
        };
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
        this.props.onEditFetchedData( newFilmData );
        this.setState({
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
        let { viewType, filmDataForEdit } = this.state,
            { fetchedData: filmsData } = this.props;

        return (
            <div className="container">
                <div className={ classNames( 'row', { 'justify-content-center': viewType === 'editList' } ) }>
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

const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=game`;
const ListOfFilmsWithFetchedData = withFetchedData( apiUrl )( ListOfFilms );
export default ListOfFilmsWithFetchedData;