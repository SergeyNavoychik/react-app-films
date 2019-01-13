import { useState, useEffect } from 'react';
import axios from "axios/index";

export default function useLoadDetailFilmData( filmId ) {
    const [ loadData, setLoadData ] = useState({
        filmData: null,
        isFilmLoading: true,
        errorLoadFilm: ''
    });
    useEffect( () => {
        const sourceAxios = axios.CancelToken.source();
        setLoadData({ isFilmLoading: true, filmData: null, errorLoadFilm: '' });
        axios.get( `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&i=${filmId}`,
            { cancelToken: sourceAxios.token }
        )
            .then( result => {
                if( result.data.Error ) {
                    setLoadData({ isFilmLoading: false, filmData: null, errorLoadFilm: result.data.Error });
                }
                else setLoadData({ isFilmLoading: false, filmData: result.data, errorLoadFilm: '' });
            })
            .catch( error => {
                if (axios.isCancel(error)) console.error('Request canceled', error);
                else setLoadData({ isFilmLoading: false, filmData: null, errorLoadFilm: error.response.data.Error });
            })
        return () => sourceAxios.cancel();
    }, [filmId] );

    return loadData;
}