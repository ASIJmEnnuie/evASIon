import React from 'react';
import FRIP_OnlinePage from '../components/FRIP_OnlinePage';

const FRIP_EventPage = React.createClass({
  render: function() {
    return (
      <FRIP_OnlinePage>
        <div id="eventPage">
          <h1>Bienvenue, vous êtes actuellement sur la page Events</h1>
        </div>
      </FRIP_OnlinePage>
    );
  }
});

export default FRIP_EventPage;
