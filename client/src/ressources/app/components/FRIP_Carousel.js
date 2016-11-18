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
              <IconButton className="iconSliderNavigation" onTouchTap={this.props.previousSlide}>
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
              <IconButton className="iconSliderNavigation" onTouchTap={this.props.nextSlide}>
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
      autoplayInterval: 4000,
      infiniteLoop: true,
      slidesToShow: 3,
      slidesToScroll: 1,
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
              <IconButton className="iconSliderNavigation" onTouchTap={this.props.previousSlide}>
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
              <IconButton className="iconSliderNavigation" onTouchTap={this.props.nextSlide}>
                <HardwareKeyboardArrowRight />
              </IconButton>
            )
          }
        }),
        position: 'CenterRight',
      },
      {
        component: React.createClass({
          render() {
            var self = this;
            var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
            return (
              <ul style={self.getListStyles()}>
                {
                  indexes.map(function(index) {
                    return (
                      <li style={self.getListItemStyles()} key={index}>
                        <button
                          style={self.getButtonStyles(self.props.currentSlide === index)}
                          onClick={self.props.goToSlide.bind(null, index)}>
                          &bull;
                        </button>
                      </li>
                    )
                  })
                }
              </ul>
            )
          },
          getIndexes(count, inc) {
            var arr = [];
            for (var i = 0; i < count; i += inc) {
              arr.push(i);
            }
            return arr;
          },
          getListStyles() {
            return {
              position: 'relative',
              margin: 0,
              top: -10,
              padding: 0
            }
          },
          getListItemStyles() {
            return {
              listStyleType: 'none',
              display: 'inline-block'
            }
          },
          getButtonStyles(active) {
            return {
              border: 0,
              background: 'transparent',
              color: 'black',
              cursor: 'pointer',
              padding: 10,
              outline: 0,
              fontSize: 24,
              opacity: active ? 1 : 0.5
            }
          }
        }),
        position: 'BottomCenter'
      }
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
