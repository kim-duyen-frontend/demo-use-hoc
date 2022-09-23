import axios from 'axios';
import React, { Component } from 'react';

const withFetch = (WrappedComponent) => {
    class withFetch extends Component {
        constructor(props) {
            super(props);
            this.state = {
                list: []
            }
        }
        componentDidMount() {
            const response = axios.get("https://json-faker.onrender.com/movies").then((json) => this.setState({ list: json.data.movies }));
            return response?.data;
        }
        render() {
            const { list } = this.state;
            return (
                <>
                    {list.length > 0 && (
                        <WrappedComponent listMovie={list} />
                    )}
                </>
            );
        }
    }
    return withFetch;
}
export default withFetch;