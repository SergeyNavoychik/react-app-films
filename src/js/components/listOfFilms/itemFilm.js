import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ItemFilm ({ filmData, index }){
    return (
        <tr>
            <th scope="row">{ index }</th>
            <td>{ filmData.Title }</td>
            <td>{ filmData.Year }</td>
            <td>
                <Link to={`/edit/${filmData.imdbID}`}><i className="fas fa-pen"/></Link>
                <Link to={`/film-info/${filmData.imdbID}`}><i className="fas fa-eye"/></Link>
            </td>
        </tr>
    )
}
ItemFilm.propTypes = {
    index: PropTypes.number.isRequired,
    filmData: PropTypes.shape({
        imdbID: PropTypes.string.isRequired,
        Poster: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Year: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired
    })
};
export default ItemFilm;