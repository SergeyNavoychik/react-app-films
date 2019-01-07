import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFilms, updateFilm } from '../actions/films';

export default function withFilmsData( countShowFilms ) {
    return function (WrappedComponent) {
        class WithFilmsData extends Component {
            componentDidMount(){
                if( this.props.films.length <= 0 ) this.props.fetchFilms();
            }
            render() {
                const { films, isFilmsLoading, errorLoadFilms, updateFilm } = this.props;
                return (
                    <div className="row">
                        { isFilmsLoading && <div className="fa-2x spinner-absolute-center"><i className="fas fa-spinner fa-spin"/></div> }
                        { errorLoadFilms && <div className="col-12"><div className="alert alert-danger" role="alert">{ errorLoadFilms }</div></div>}
                        { !isFilmsLoading &&
                            <WrappedComponent
                                { ...this.props }
                                films={ films }
                                updateFilm={updateFilm}/>
                        }
                    </div>
                )
            }
        }
        WithFilmsData.propTypes = {
            films: PropTypes.arrayOf(PropTypes.shape({
                Poster: PropTypes.string.isRequired,
                Title: PropTypes.string.isRequired,
                Year: PropTypes.oneOfType([
                    PropTypes.number,
                    PropTypes.string
                ]).isRequired
            })),
            isFilmsLoading: PropTypes.bool.isRequired,
            errorLoadFilms: PropTypes.string
        };
        const mapStateToProps = state => {
            let films = state.films.films;
            if( countShowFilms ) films = films.slice(0, countShowFilms + 1);
            return {
                films,
                isFilmsLoading: state.films.isFilmsLoading,
                errorLoadFilms: state.films.errorLoadFilms
            }
        }
        const mapDispatchToProps = {
            fetchFilms,
            updateFilm,
        }
        return connect(mapStateToProps, mapDispatchToProps)(WithFilmsData);
    }
}