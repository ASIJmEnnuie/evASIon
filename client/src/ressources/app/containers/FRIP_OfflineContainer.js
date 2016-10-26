import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import FRIP_NavbarOffline from '../components/FRIP_NavbarOffline';

const FRIP_OfflineContainer = React.createClass({
  render: function() {
    return (
      <div>
        <FRIP_NavbarOffline
          text={this.props.data.navbar}
        />
        <div id="homeOfflinePage">
          <h1>Bienvenue, vous êtes actuellement sur la page HomeOffline</h1>
          <RaisedButton label="Connexion" primary={true} onTouchTap={this.props.connexion}/>
        </div>
      </div>
    );
  }
});

export default FRIP_OfflineContainer;
