import React from 'react';

const FRIP_HomePage = React.createClass({
  render: function() {
    return (
      <div id={this.props.id}>
        <h1>Bienvenue, vous êtes actuellement sur la page HomeOnline</h1>
      </div>
    );
  }
});

export default FRIP_HomePage;
