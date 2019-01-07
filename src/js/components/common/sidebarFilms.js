import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function SidebarFilms ({ films }){
    function handleMapFilms(film) {
        return(
            <li key={film.imdbID}>
                <NavLink to={`/edit/${film.imdbID}`}>{ film.Title }</NavLink>
            </li>
        )
    }
    return (
        <div className="col-md-4 sidebar-films">
            <h4 className="sidebar-films__title">All films</h4>
            <ul>
                { films.map( handleMapFilms )}
            </ul>
        </div>
    )
}
SidebarFilms.propTypes = {
    films: PropTypes.arrayOf(PropTypes.shape({
        Title: PropTypes.string.isRequired,
        imdbID: PropTypes.string.isRequired
    }))
};
export default SidebarFilms;