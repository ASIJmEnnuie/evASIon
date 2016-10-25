import React from 'react';

const FRIP_EventPage = React.createClass({
  render: function() {
    return (
      <div id={this.props.id}>
        <h1>Bienvenue, vous êtes actuellement sur la page Events</h1>
      </div>
    );
  }
});

export default FRIP_EventPage;
