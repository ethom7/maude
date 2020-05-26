import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

import Address from '../../util/Address';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            businesses: []
        };

        this.searchAddress = this.searchAddress.bind(this);
    }

    searchAddress(term, sortBy) {
        Address.search(term, sortBy).then(businesses => {
            this.setState({businesses: businesses});
        });
    }

    render() {
        return (
            <div className="App">
                <h1>mildred</h1>
                <h3>find the tree through the forest</h3>
                <SearchBar searchAddress={this.searchAddress} />
                <BusinessList businesses={this.state.businesses} />
            </div>
        );
    }
}

export default App;