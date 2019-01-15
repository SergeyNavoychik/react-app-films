import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import withFilmsData from '../../helpers/withFilmsData'
import classNames from "classnames";
import SidebarFilms from '../common/sidebarFilms';

function EditFilm( props ) {
    const [ filmData, setFilm ] = useState(null);
    const [ isFilmNotFound, setIsFilmNotFound ] = useState(false);
    const [ formErrors, setFormErrors ] = useState({ Title: null, Year: null });

    useEffect( () => {
        findFilm(props.match.params.id);
    }, [ props.match.params.id ])

    function findFilm ( id ) {
        let { films } = props;
        let filmData = films.find( film => film.imdbID === id );
        setFilm( {...filmData } );
        setIsFilmNotFound( !filmData );
    }
    function handleChangeForm (e){
        let { name, value } = e.target;
        if(!value) formErrors[name] = "Field is required.";
        else formErrors[name] = null;
        filmData[name] = value;
        setFilm( filmData );
        setFormErrors( formErrors );
    }
    function handleSubmitForm (e) {
        e.preventDefault();
        if( !formErrors.Title && !formErrors.Year ) {
            props.updateFilm(filmData);
            props.history.push('/dashboard');
        }
    }
    function handleCloseForm () {
        props.history.goBack();
    }
    return(
        <div className="col-12">
            { isFilmNotFound && <div className=""><div className="alert alert-danger" role="alert">Film not found.</div></div>}
            <div className="row">
                <div className="col-md-8">
                    {filmData &&
                    <form onSubmit={handleSubmitForm}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text"
                                   onChange={handleChangeForm}
                                   value={filmData.Title}
                                   className={classNames('form-control', {'is-invalid': formErrors.Title})}
                                   name="Title"
                                   id="title"/>
                            {formErrors.Title && <div className="invalid-feedback">{formErrors.Title}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="year">Year</label>
                            <input type="text"
                                   onChange={handleChangeForm}
                                   value={filmData.Year}
                                   className={classNames('form-control', {'is-invalid': formErrors.Year})}
                                   name="Year"
                                   id="year"/>
                            {formErrors.Year && <div className="invalid-feedback">{formErrors.Year}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary" style={{marginRight: '10px'}}>Save</button>
                        <button type="button" className="btn btn-primary" onClick={handleCloseForm}>Back</button>
                    </form>
                    }
                </div>
                <SidebarFilms films={ props.films } baseUrl={'/edit'}/>
            </div>
        </div>
    )
}

EditFilm.propTypes = {
    updateFilm: PropTypes.func.isRequired,
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
export default withFilmsData()(EditFilm);