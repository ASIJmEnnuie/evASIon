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
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth,
      container: "online",
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

    var offlineContainer = (
      <FRIP_OfflineContainer
        data={dataOffline.offlineContainer}
        connexion={this.connexion}
      />
    );

    var onlineContainer = (
      <FRIP_OnlineContainer
        data={data.onlineContainer}
        deconnexion={this.deconnexion}
        screenWidth={this.state.screenWidth}
        screenHeight={this.state.screenHeight}
      />
    );

    switch (this.state.container) {
      case "offline":
        return offlineContainer;
        break;

      case "online":
        return onlineContainer;
        break;

      default:
        return offlineContainer;
    }
  }
});

export default FRIP_Global;
