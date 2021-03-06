import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

import Yelp  from '../../util/Yelp';





// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
    }
    this.searchYelp = this.searchYelp.bind(this);

  }
  
  searchYelp(term, location, sortBy){
    //console.log(`Searching Ravenous for ${term}, ${location}, ${sortBy}! `)
    Yelp.search(term, location, sortBy).then((businesses) => this.setState({ businesses:businesses }));
    //console.log(this.state.businesses);

  };
  
  
  render() {
    return <div className="App">
    <h1>ravenous</h1>
    <SearchBar searchYelp={this.searchYelp} />
    <BusinessList businesses={this.state.businesses} />
  </div>
  }
}
  

export default App;
