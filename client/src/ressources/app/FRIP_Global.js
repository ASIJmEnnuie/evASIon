import React from 'react';

import FRIP_HomeOfflinePage from './pages/FRIP_HomeOfflinePage';
import FRIP_HomeOnlinePage from './pages/FRIP_HomeOnlinePage';
import FRIP_EventPage from './pages/FRIP_EventPage';

const FRIP_Global = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Je suis le composant Global</h1>
        <FRIP_HomeOfflinePage />
        <FRIP_HomeOnlinePage />
        <FRIP_EventPage />
      </div>
    );
  }
});

export default FRIP_Global;
