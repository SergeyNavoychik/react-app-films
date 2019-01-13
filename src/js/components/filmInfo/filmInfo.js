import React from 'react';
import PropTypes from 'prop-types';
import withFilmsData from '../../helpers/withFilmsData';
import useLoadDetailFilmData from '../../helpers/useLoadDetailFilmData';
import SidebarFilms from '../common/sidebarFilms';

export function FilmInfo ({ films, match }){
    let { isFilmLoading, filmData, errorLoadFilm } = useLoadDetailFilmData(match.params.id);
    return (
        <div className="col-12">
            <div className="row">
                <div className="col-8">
                    { isFilmLoading && <div className="fa-2x spinner-absolute-center"><i className="fas fa-spinner fa-spin"/></div> }
                    { errorLoadFilm && <div className="col-12"><div className="alert alert-danger" role="alert">{ errorLoadFilm }</div></div>}
                    { !isFilmLoading && filmData &&
                        <div className="row">
                            <div className="col-12">
                                <h3>{ filmData.Title }</h3>
                            </div>
                            <div className="col-sm-6">
                                <img src={ filmData.Poster } alt="" style={{ maxWidth: '100%'}}/>
                            </div>
                            <div className="col-sm-6">
                                <ul>
                                    <li><b>Actors: </b>{ filmData.Actors }</li>
                                    <li><b>Genre: </b>{ filmData.Genre }</li>
                                    <li><b>Awards: </b>{ filmData.Awards }</li>
                                    <li><b>Country: </b>{ filmData.Country }</li>
                                    <li><b>Year: </b>{ filmData.Year }</li>
                                    <li><b>Runtime: </b>{ filmData.Runtime }</li>
                                    <li><a href={ filmData.Website } target="_blank">website</a></li>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
                <SidebarFilms films={ films } baseUrl={'/film-info'}/>
            </div>
        </div>
    )
}

FilmInfo.propTypes = {
    films: PropTypes.arrayOf(PropTypes.shape({
        imdbID: PropTypes.string.isRequired,
        Poster: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Year: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired
    }))
};
export default withFilmsData()(FilmInfo);