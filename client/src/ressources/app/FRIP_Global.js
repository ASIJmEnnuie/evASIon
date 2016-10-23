import React from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

import FRIP_OfflineContainer from './containers/FRIP_OfflineContainer';
import FRIP_OnlineContainer from './containers/FRIP_OnlineContainer';

const FRIP_Global = React.createClass({
  getInitialState: function() {
    return {
      stompClient: null,
      donnees: [],
      container: "offline"
    }
  },

  connexion: function () {
    if (this.state.stompClient === null) {
      console.log("Connexion");
      // Initiation de la connexion avec les sockets
      this.setState({container:"online"});
    }
  },

  render: function() {
    var offlinePage = (
      <FRIP_OfflineContainer connexion={this.connexion}/>
    );

    var onlinePage = (
      <FRIP_OnlineContainer/>
    );

    switch (this.state.container) {
      case "offline":
        return offlinePage;
        break;

      case "online":
        return onlinePage;
        break;

      default:
        return offline;
    }
  }
});

export default FRIP_Global;
