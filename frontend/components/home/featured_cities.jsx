import React from 'react';
import Slider from 'react-slick';
class FeaturedCities extends React.Component {
  render(){
    var settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      adaptiveHeight: true,
      nextArrow: <div>HI</div>
    };
    return (
      <div className='container'>
        <Slider classname="slider"{...settings}>
          <div className="pic"><img src='https://lemonly.com/wp-content/uploads/2013/05/Paris.jpg' /></div>
          <div className="pic"><img src='https://img.posterlounge.co.uk/images/wbig/poster-paris-cafe-24542.jpg' /></div>
          <div className="pic"><img src='https://www.dropbox.com/home/projectphotos?preview=amsterdam.jpg' /></div>
        </Slider>
      </div>
    );
  }
}
export default FeaturedCities;
