import React from 'react';

const FRIP_HomePage = React.createClass({
  componentDidMount: function() {
    $("#yolo").slick();
  },

  render: function() {
    return (
      <div id={this.props.id}>
        <h1>Bienvenue, vous êtes actuellement sur la page HomeOnline</h1>
        <div id="yolo" data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "mobileFirst": true, "arrows": false, "centerMode": true}'>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </div>
      </div>
    );
  }
});

export default FRIP_HomePage;
