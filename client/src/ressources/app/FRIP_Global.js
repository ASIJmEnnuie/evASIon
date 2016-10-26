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
      container: "offline",
      lang: "fr"
    }
  },

  connexion: function() {
    if (this.state.stompClient === null) {
      // TODO initiate stompClient connexion
      this.setState({container:"online"});
    }
  },

  deconnexion: function() {
    //TODO disconnect stompClient here
    this.setState({container:"offline"});
  },

  render: function() {
    var data = require("../data/"+this.state.lang+"/onlineContainer");
    var dataOffline = require("../data/"+this.state.lang+"/offlineContainer");

    var offlinePage = (
      <FRIP_OfflineContainer
        data={dataOffline.offlineContainer}
        connexion={this.connexion}/>
    );

    var onlinePage = (
      <FRIP_OnlineContainer
        data={data.onlineContainer}
        deconnexion={this.deconnexion}
      />
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
