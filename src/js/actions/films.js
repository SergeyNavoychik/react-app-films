import * as types from '../constants/films';
import axios from 'axios';

function requestFilms() {
    return {
        type: types.FETCH_FILMS_REQUEST
    }
}
function requestFilmsSuccess( films ) {
    return {
        type: types.FETCH_FILMS_SUCCESS,
        payload: films
    }
}
function requestFilmsFailed( error ) {
    return {
        type: types.FETCH_FILMS_FAILED,
        payload: error
    }
}
export function updateFilm( film ) {
    return {
        type: types.UPDATE_FILM,
        payload: film
    }
}
export function fetchFilms() {
    return dispatch => {
        dispatch( requestFilms() );
        return axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=game`)
            .then( result => {
                dispatch( requestFilmsSuccess( result.data.Search ) );
            })
            .catch( err => {
                dispatch( requestFilmsFailed( err.response.data.Error ));
            })
    }
}