import React from 'react';
import Slider from 'react-slick';
class FeaturedCities extends React.Component {
  render(){
    var settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      adaptiveHeight: true,
    };
    return (
      <div className='container'>
        <Slider classname="slider"{...settings}>
          <div className="pic"><img src={window.rome} /></div>
          <div className="pic"><img src={window.paris} /></div>
          <div className="pic"><img src={window.mumbai} /></div>
          <div className="pic"><img src={window.london} /></div>
          <div className="pic"><img src={window.amsterdam} /></div>
          <div className="pic"><img src={window.barcelona} /></div>
        </Slider>
      </div>
    );
  }
}
export default FeaturedCities;
