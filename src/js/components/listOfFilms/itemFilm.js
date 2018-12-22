import React from 'react';
import PropTypes from 'prop-types';

function ItemFilm ({ filmData, onClickEditFilm }){
    function handleClickEditFilm() {
        onClickEditFilm(filmData);
    }
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
                        <button className="item-field-card__btn" onClick={handleClickEditFilm}>
                            <i className="fas fa-pen"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
ItemFilm.propTypes = {
    onClickEditFilm: PropTypes.func.isRequired,
    filmData: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Year: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired
    })
};
export default ItemFilm;