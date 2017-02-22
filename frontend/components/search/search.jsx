import React from 'react';
import ListingMap from '../map/ListingMap';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state ={fetching: true};
  }
   componentDidMount() {
    this.props.fetchListings().then(() => this.setState({fetching: false}));
  }
  render(){
    if(this.state.fetching){
      return null;
    }
    return(
      <div>
        <div id="searchlhs">

        </div>
        <ListingMap id="map" listings={this.props.listings}/>
      </div>
    );
  }
}
export default Search;
