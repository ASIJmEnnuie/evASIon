import React from 'react';
import Slider from 'react-slick';

var FRIP_CarouselOffline = React.createClass({
  render: function () {
    var carousel = this;

    var settings = {
      dots: true,
			arrows: false,
      infinite: true,
			centerMode: false,
			autoplay: true,
			autoplaySpeed: 3000,
      draggable: false,
			pauseOnHover: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
    };

    var slides = [];
    carousel.props.pictureList.map(function(item,i) {
      slides.push(
        <div key={i} className="slide">
          <img src={item} alt={carousel.props.namePicture[i]}></img>
          <div className="slide-text">
            <h3>{carousel.props.namePicture[i]}</h3>
          </div>
        </div>
      );
    })

    return (
      <Slider {...settings}>
        {slides}
      </Slider>
    );
  }
});

export default FRIP_CarouselOffline;
