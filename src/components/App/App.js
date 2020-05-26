import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

import Yelp from '../../util/Yelp';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            businesses: []
        };

        this.searchYelp = this.searchYelp.bind(this);
    }

    searchYelp(term, sortBy) {
        Yelp.search(term, sortBy).then(businesses => {
            this.setState({businesses: businesses});
        });
    }

    render() {
        return (
            <div className="App">
                <h1>mildred</h1>
                <h3>find the tree through the forest</h3>
                <SearchBar searchYelp={this.searchYelp} />
                <BusinessList businesses={this.state.businesses} />
            </div>
        );
    }
}

export default App;