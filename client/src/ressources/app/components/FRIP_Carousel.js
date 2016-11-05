import React from 'react';
import Carousel from 'nuka-carousel';
import IconButton from 'material-ui/IconButton';
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

const FRIP_Carousel = React.createClass({
  getDefaultProps: function() {
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
      autoplay: false,
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
        animationDuration={this.props.animationDuration}
        autoplay={this.props.autoplay}
        autoplayInterval={this.props.autoplayInterval}
        slidesToShow={this.props.slidesToShow}
        slidesToScroll={this.props.slidesToScroll}
        wrapAround={this.props.infiniteLoop}
        decorators={this.props.decorators}
      >
        {this.props.children}
      </Carousel>
    );
  }
});

const FRIP_CarouselOffline = React.createClass({
  render: function() {
    var carousel = this;

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

    var settings = {
      animationDuration: 1000,
      autoplay: true,
      autoplayInterval: 3000,
      wrapAround: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      decorators: decorator,
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
      <Carousel {...settings}>
        {slides}
      </Carousel>
    );
  }
});

export {FRIP_Carousel, FRIP_CarouselOffline};
