import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const FRIP_OfflineContainer = React.createClass({
  render: function() {
    return (
      <div id="homeOfflinePage">
        <h1>Bienvenue, vous êtes actuellement sur la page HomeOffline</h1>
        <RaisedButton label="Connexion" primary={true} onTouchTap={this.props.connexion}/>
      </div>
    );
  }
});

export default FRIP_OfflineContainer;
