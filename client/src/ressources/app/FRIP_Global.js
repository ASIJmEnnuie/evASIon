import React from 'react';

import FRIP_HomeOfflinePage from './page/FRIP_HomeOfflinePage';
import FRIP_HomeOnlinePage from './page/FRIP_HomeOnlinePage';
import FRIP_EventPage from './page/FRIP_EventPage';

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
