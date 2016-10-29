import React from 'react';
import Carousel from 'nuka-carousel';
import Slider from 'react-slick';
import IconButton from 'material-ui/IconButton';
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';


const FRIP_Carousel = React.createClass({
  getInitialState: function() {
    var decorator = [
      {
        component: React.createClass({
          render() {
            return (
              <IconButton onTouchTap={this.props.previousSlide}>
                <HardwareKeyboardArrowLeft />
              </IconButton>
            )
          }
        }),
        position: 'CenterLeft',
      },
      {
        component: React.createClass({
          render() {
            return (
              <IconButton onTouchTap={this.props.nextSlide}>
                <HardwareKeyboardArrowRight />
              </IconButton>
            )
          }
        }),
        position: 'CenterRight',
      },
  ];

    return {
      animationDuration: 1000,
      autoplay: true,
      autoplayInterval: 3000,
      infiniteLoop: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      decorators: decorator,
    }
  },

  render: function() {
    return (
      <Carousel
        animationDuration={this.state.animationDuration}
        autoplay={this.state.autoplay}
        autoplayInterval={this.state.autoplayInterval}
        slidesToShow={this.state.slidesToShow}
        slidesToScroll={this.state.slidesToScroll}
        wrapAround={this.state.infiniteLoop}
        decorators={this.state.decorators}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </Carousel>
    );
  }
});

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

export {FRIP_Carousel, FRIP_CarouselOffline};
