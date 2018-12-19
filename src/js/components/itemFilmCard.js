import React from 'react'

function itemFilmCard ({ title, description, poster }){
    return (
        <div className="col-md-3">
            <div className="item-field-card">
                <img className="item-field-card__image" src={ poster } alt="Card"/>
                <div className="item-field-card__body">
                    <h5 className="body__title">{ title }</h5>
                    <p>{ description }</p>
                </div>
            </div>
        </div>
    )
}
export default itemFilmCard