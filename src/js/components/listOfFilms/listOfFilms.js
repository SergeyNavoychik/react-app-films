import React from 'react';
import PropTypes from 'prop-types';
import withFilmsData from '../../helpers/withFilmsData';
import ItemFilm from './itemFilm';

function ListOfFilms ( props ) {
    function mapFilmsData ( item, index ) {
        return <ItemFilm
                    key={item.imdbID}
                    index={index + 1}
                    filmData={item}/>
    }
    return (
        <div className="col-12">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Year</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                { props.films.map( mapFilmsData ) }
                </tbody>
            </table>
        </div>
    )
}
ListOfFilms.propTypes = {
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
const ListOfFilmsWithFilmsData = withFilmsData( 10 )( ListOfFilms );
export default ListOfFilmsWithFilmsData;
