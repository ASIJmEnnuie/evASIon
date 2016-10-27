import React from 'react';
import Slider from 'react-slick';

var nbSlides = require('../../data/const').const.nbSlides;
console.log(nbSlides);

const FRIP_Carousel = React.createClass({
  // render: function () {
  //     var settings = {
  //       dots: false,
  // 			arrows: false,
  //       infinite: true,
  // 			centerMode: false,
  // 			autoplay: false,
  // 			autoplaySpeed: 3000,
  // 			pauseOnHover: true,
  //       speed: 500,
  //       slidesToShow: 3,
  //       slidesToScroll: 1
  //     };
  //
  //     var slides = [];
  //     for (var i=0; i < nbSlides; i++) {
  //       slides.push(
  //         <div key={i} className="slide">
  //           <div className="slideContent">
  //             <div>
  //               slide{i}
  //             </div>
  //           </div>
  //         </div>
  //       );
  //     }
  //     return (
  //       <Slider {...settings}>
  //         {slides}
  //       </Slider>
  //     );
  //   }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
          <div><h3>7</h3></div>
          <div><h3>8</h3></div>
          <div><h3>9</h3></div>
        </Slider>
      </div>
    );
  }
});

export default FRIP_Carousel;
