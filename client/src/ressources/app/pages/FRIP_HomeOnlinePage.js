import React from 'react';
import FRIP_OnlinePage from './FRIP_OnlinePage';

const FRIP_HomeOnlinePage = React.createClass({
  render: function() {
    return (
      <FRIP_OnlinePage>
        <div id="homeOnlinePage">
          <h1>Bienvenue, vous êtes actuellement sur la page HomeOnline</h1>
        </div>
      </FRIP_OnlinePage>
    );
  }
});

export default FRIP_HomeOnlinePage;
