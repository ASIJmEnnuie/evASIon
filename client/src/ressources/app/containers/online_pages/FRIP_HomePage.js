import React from 'react';
import FRIP_Carousel from '../../components/FRIP_Carousel';

const FRIP_HomePage = React.createClass({
  render: function() {
    return (
      <div id={this.props.id}>
        <div id="homeOnlinePage">
          <h1>Bienvenue, vous êtes actuellement sur la page HomeOnline</h1>
          <FRIP_Carousel/>
        </div>
      </div>
    );
  }
});

export default FRIP_HomePage;
