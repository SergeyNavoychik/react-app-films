import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ItemFilm ({ filmData }){
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 item-film-card">
            <div className="item-film-card__content">
                <img className="item-field-card__image" src={ filmData.Poster } alt="Card"/>
                <div className="item-field-card__body">
                    <div>
                        <h5 className="body__title">{ filmData.Title }</h5>
                        <p>{ filmData.Year }</p>
                    </div>
                    <div className="item-field-card__buttons">
                        <Link to={`/edit/${ filmData.imdbID}`} className="item-field-card__btn">
                            <i className="fas fa-pen"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
ItemFilm.propTypes = {
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