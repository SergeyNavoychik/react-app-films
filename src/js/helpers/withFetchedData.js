import React, { Component } from 'react';
import axios from "axios/index";

export default function withFetchedData( apiUrl ) {
    return function (WrappedComponent) {
        return class extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    fetchedData: [],
                    isLoading: true,
                    error: null,
                };
            }
            componentDidMount(){
                this.getData();
            }
            getData = () => {
                axios.get(apiUrl)
                    .then( ( { data } ) => {
                        let fetchedData = data.Search;
                        this.setState({
                            fetchedData,
                            isLoading: false
                        })
                    })
                    .catch( err => {
                        let error = err.response.data.Error;
                        this.setState({
                            error,
                            isLoading: false
                        })
                    })
            }
            handleEditFetchedData = newDataItem => {
                let fetchedData = this.state.fetchedData.map( itemData => {
                    if(itemData.imdbID === newDataItem.imdbID) return newDataItem;
                    else return itemData;
                })
                this.setState({ fetchedData });
            }
            render() {
                let { isLoading, error, fetchedData } = this.state
                return (
                    <div>
                        { isLoading && <div className="fa-2x spinner-absolute-center"><i className="fas fa-spinner fa-spin"/></div> }
                        { error && <div className="col-12"><div className="alert alert-danger" role="alert">{ error }</div></div>}
                        <WrappedComponent
                            fetchedData={ fetchedData }
                            onEditFetchedData={ this.handleEditFetchedData }
                            { ...this.props }/>
                    </div>
                )
            }
        }
    }
}