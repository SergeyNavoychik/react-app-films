import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withFilmsData from '../../helpers/withFilmsData';
import ItemFilm from './itemFilm';

class ListOfFilms extends Component {
    mapFilmsData = ( item, index ) => {
        return <ItemFilm
                    key={item.imdbID}
                    index={index + 1}
                    filmData={item}/>
    }
    render() {
        const { films } = this.props;
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
                    { films.map( this.mapFilmsData ) }
                    </tbody>
                </table>
            </div>
        )
    }
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