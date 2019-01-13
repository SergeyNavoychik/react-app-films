import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withFilmsData from '../../helpers/withFilmsData'
import classNames from "classnames";
import SidebarFilms from '../common/sidebarFilms';

class EditFilm extends Component {
    constructor(props){
        super(props);
        this.state = {
            filmData: null,
            isFilmNotFound: false,
            formErrors: {
                Title: null,
                Year: null,
            }
        }
    }
    componentDidMount(){
        const { id } = this.props.match.params;
        this.findFilm(id);
    }
    componentDidUpdate(prevProps){
        if( prevProps.match.params.id !== this.props.match.params.id) {
            this.findFilm(this.props.match.params.id);
        }
    }
    findFilm = id => {
        let { films } = this.props;
        let filmData = films.find( film => film.imdbID === id );
        this.setState({
            filmData,
            isFilmNotFound: !filmData
        })
    }
    handleChangeForm = e => {
        let { name, value } = e.target,
            formErrors = { ...this.state.formErrors };
        if(!value) formErrors[name] = "Field is required.";
        else formErrors[name] = null;
        this.setState({
            formErrors,
            filmData: { ...this.state.filmData, [name]: value }
        });
    }
    handleSubmitForm = e => {
        e.preventDefault();
        let { filmData, formErrors } = this.state;
        if( !formErrors.Title && !formErrors.Year ) {
            this.props.updateFilm(filmData);
            this.props.history.push('/dashboard');
        }
    }
    handleCloseForm = () => {
        this.props.history.goBack();
    }
    render() {
        const { filmData, isFilmNotFound, formErrors } = this.state;
        const { films } = this.props;
        return (
            <div className="col-12">
                { isFilmNotFound && <div className=""><div className="alert alert-danger" role="alert">Film not found.</div></div>}
                <div className="row">
                    <div className="col-md-8">
                        {filmData &&
                            <form onSubmit={this.handleSubmitForm}>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text"
                                           onChange={this.handleChangeForm}
                                           value={filmData.Title}
                                           className={classNames('form-control', {'is-invalid': formErrors.Title})}
                                           name="Title"
                                           id="title"/>
                                    {formErrors.Title && <div className="invalid-feedback">{formErrors.Title}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="year">Year</label>
                                    <input type="text"
                                           onChange={this.handleChangeForm}
                                           value={filmData.Year}
                                           className={classNames('form-control', {'is-invalid': formErrors.Year})}
                                           name="Year"
                                           id="year"/>
                                    {formErrors.Year && <div className="invalid-feedback">{formErrors.Year}</div>}
                                </div>
                                <button type="submit" className="btn btn-primary" style={{marginRight: '10px'}}>Save</button>
                                <button type="button" className="btn btn-primary" onClick={this.handleCloseForm}>Back</button>
                            </form>
                        }
                    </div>
                    <SidebarFilms films={ films } baseUrl={'/edit'}/>
                </div>
            </div>
        )
    }
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