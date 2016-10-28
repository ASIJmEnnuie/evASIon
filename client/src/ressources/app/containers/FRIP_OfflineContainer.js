import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import {FRIP_NavbarOffline} from '../components/FRIP_Navbar';
import {FRIP_CarouselOffline} from '../components/FRIP_Carousel';

const FRIP_OfflineContainer = React.createClass({
  render: function() {
    return (
      <div>
        <FRIP_NavbarOffline
          text={this.props.data.navbar}
        />
        <div id="homeOfflinePage">
          <h1>Bienvenue, vous êtes actuellement sur la page HomeOffline</h1>
          <div id="carousel">
            <FRIP_CarouselOffline>
              
            </FRIP_CarouselOffline>
          </div>
          <div id="formulaire">
            <RaisedButton label="Connexion" primary={true} onTouchTap={this.props.connexion}/>
          </div>
        </div>
      </div>
    );
  }
});

export default FRIP_OfflineContainer;
