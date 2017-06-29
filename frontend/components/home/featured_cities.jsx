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
          <div className="pic" onClick={this.goTo("rome").bind(this)}><img className="city" src={window.rome} />Rome</div>
          <div className="pic" onClick={this.goTo("paris").bind(this)}><img className="city" src={window.paris} />Paris</div>
          <div className="pic" onClick={this.goTo("mumbai").bind(this)}><img className="city" src={window.mumbai} />Mumbai</div>
          <div className="pic" onClick={this.goTo("london").bind(this)}><img className="city" src={window.london} />London</div>
          <div className="pic" onClick={this.goTo("amsterdam").bind(this)}><img className="city" src={window.amsterdam} />Amsterdam</div>
          <div className="pic" onClick={this.goTo("barcelona").bind(this)}><img className="city" src={window.barcelona} />Barcelona</div>
        </Slider>
      </div>
    );
  }
}
export default FeaturedCities;
