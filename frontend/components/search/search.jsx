import React from 'react';
import ListingMap from '../map/ListingMap';
import Rheostat from 'rheostat';

class Search extends React.Component {
  constructor(props){
    super(props);
    let address = this.props.params.address || "";
    let checkIn = this.props.params.checkIn || "";
    let checkOut = this.props.params.checkOut || "";
    let guests = this.props.params.guests || "";
    let roomType = "";
    let priceRange = [0,1000];
    this.state ={fetching: true, address, checkIn, checkOut, guests, roomType, priceRange};
  }
  update(field){
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value}, () => {
        let formparams = Object.assign({},this.state);
        delete formparams.fetching;
        delete formparams.address;
        this.props.updateSearchParams(formparams);
      });
    };
  }
   componentDidMount() {
    $("input.searchHidden" ).toggleClass( "searchShow");
    $("div.nav-container" ).toggleClass( "nav-container-border");
    let searchParams = Object.assign({},this.state);
    delete searchParams.fetching;
    this.props.fetchListings({searchParams}).then((listings) => {this.setState({fetching: false})});
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.fetchListings({searchParams: this.props.searchParams}).then((listings) => {this.setState({fetching: false})});
  }
  updateValue(sliderState){
    this.setState({priceRange: [sliderState.values[0], sliderState.values[1]]}, () => {
      let formparams = Object.assign({},this.state);
      delete formparams.fetching;
      delete formparams.address;
      this.props.updateSearchParams(formparams);
    });
  }
  render(){
    if(this.state.fetching){
      return null;
    }

    let listings = Object.keys(this.props.listings);
    let photos = listings.slice(0,listings.length - 1).map(id => <img src={this.props.listings[id].listing_photo_url} />);
    return(
      <div id="searchpage">
        <div id="searchform">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="date" onChange={this.update("checkIn").bind(this)} placeholder="Check In" />
            <input type="date"  onChange={this.update("checkOut").bind(this)}placeholder="Check Out" />
              <input type="number" onChange={this.update("guests").bind(this)} placeholder="1 guest" />
              <input type="text"  onChange={this.update("roomType").bind(this)}placeholder="Room type" />
              <input type="number"  onChange={this.update("price").bind(this)}placeholder="Price range" />
              <div className="rheostat-container">
                <Rheostat min={1} max={1000} values={[1, 1000]}  onValuesUpdated={this.updateValue.bind(this)}/>
              </div>
              <input type="submit" value="Search"/>
          </form>
        </div>
        <div>
          <div id="searchlhs">
            {photos}
          </div>
          <ListingMap id="map" listings={this.props.listings}/>

        </div>
      </div>
    );
  }
}
export default Search;
