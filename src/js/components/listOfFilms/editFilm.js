import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";

class EditFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmData: props.filmData,
            errors: {
                Title: null,
                Year: null,
            }
        };
    }
    handleChangeForm = e => {
        let { name, value } = e.target,
            errors = { ...this.state.errors };
        if(!value) errors[name] = "Field is required.";
        else errors[name] = null;
        this.setState({
            errors,
            filmData: { ...this.state.filmData, [name]: value }
        });
    }
    handleSubmitForm = e => {
        e.preventDefault();
        let { filmData, errors } = this.state;
        if( !errors.Title && !errors.Year ) this.props.onSave( filmData );
    }
    render() {
        let { filmData: { Title, Year }, errors } = this.state,
            { onClose } = this.props;

        return (
            <div className="col-6">
                <form onSubmit={this.handleSubmitForm}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text"
                               onChange={ this.handleChangeForm }
                               value={Title}
                               className={classNames( 'form-control', { 'is-invalid': errors.Title } )}
                               name="Title"
                               id="title"/>
                        { errors.Title && <div className="invalid-feedback">{ errors.Title }</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Year</label>
                        <input type="text"
                               onChange={ this.handleChangeForm }
                               value={Year}
                               className={classNames( 'form-control', { 'is-invalid': errors.Year } )}
                               name="Year"
                               id="year"/>
                        { errors.Year && <div className="invalid-feedback">{ errors.Year }</div>}
                    </div>
                    <button type="submit" className="btn btn-primary" style={ { marginRight: '10px' } }>Save</button>
                    <button type="button" className="btn btn-primary" onClick={ onClose }>Close</button>
                </form>
            </div>
        )
    }
}
EditFilm.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    filmData: PropTypes.shape({
        Poster: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Year: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired
    })
};
export default EditFilm;