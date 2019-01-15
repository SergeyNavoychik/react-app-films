import React from 'react';
import PropTypes from 'prop-types';
import withFilmsData from '../../helpers/withFilmsData';
import ItemFilm from './itemFilm';

function Dashboard ( { films } ) {
    function mapFilmsData( item ) {
        return <ItemFilm
            key={item.imdbID}
            filmData={item}/>
    }
    return (
        <div className="col-12">
            <div className="row">
                { films.map( mapFilmsData ) }
            </div>
        </div>
    )
}

Dashboard.propTypes = {
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
const DashboardWithFilmsData = withFilmsData( 5 )( Dashboard );
export default DashboardWithFilmsData;
