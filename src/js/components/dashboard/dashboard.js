import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withFilmsData from '../../helpers/withFilmsData';
import ItemFilm from './itemFilm';

class Dashboard extends Component {
    mapFilmsData = ( item ) => {
        return <ItemFilm
                    key={item.imdbID}
                    filmData={item}/>
    }
    render() {
        const { films } = this.props;
        return (
            <div className="col-12">
                <div className="row">
                    { films.map( this.mapFilmsData ) }
                </div>
            </div>
        )
    }
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
