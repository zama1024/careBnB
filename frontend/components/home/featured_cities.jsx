import React from 'react';
import Slider from 'react-slick';
import { hashHistory } from 'react-router';
class FeaturedCities extends React.Component {
  goTo(city){
    return (e) => {
      e.preventDefault();
      hashHistory.push(`/search/${city}////`);
    };
  }
  render(){
    var settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      adaptiveHeight: true,
    };
    return (
      <div className='container'>
        <h3>Featured Cities</h3>
        <Slider classname="slider"{...settings}>
          <div className="pic" onClick={this.goTo("rome").bind(this)}><img src={window.rome} /></div>
          <div className="pic" onClick={this.goTo("paris").bind(this)}><img src={window.paris} /></div>
          <div className="pic" onClick={this.goTo("mumbai").bind(this)}><img src={window.mumbai} /></div>
          <div className="pic" onClick={this.goTo("london").bind(this)}><img src={window.london} /></div>
          <div className="pic" onClick={this.goTo("amsterdam").bind(this)}><img src={window.amsterdam} /></div>
          <div className="pic" onClick={this.goTo("barcelona").bind(this)}><img src={window.barcelona} /></div>
        </Slider>
      </div>
    );
  }
}
export default FeaturedCities;
