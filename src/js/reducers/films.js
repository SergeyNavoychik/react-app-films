import * as types from '../constants/films';

const initialState = {
    films: [],
    isFilmsLoading: false,
    errorLoadFilms: null
}

export default function films ( state = initialState, action ) {
    switch (action.type) {
        case types.FETCH_FILMS_REQUEST:
            return { ...state, isFilmsLoading: true };
        case types.FETCH_FILMS_FAILED:
            return { ...state, isFilmsLoading: false, errorLoadFilms: action.payload };
        case types.FETCH_FILMS_SUCCESS:
            return { ...state, isFilmsLoading: false, errorLoadFilms: null, films: action.payload };
        case types.UPDATE_FILM:
            let films = state.films.map( film => {
                if( action.payload.imdbID === film.imdbID ) return action.payload;
                else return film;
            });
            return { ...state, films };
        default:
            return state
    }
}