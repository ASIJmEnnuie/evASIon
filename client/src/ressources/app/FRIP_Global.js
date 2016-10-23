import React from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

import FRIP_HomeOfflinePage from './pages/FRIP_HomeOfflinePage';
import FRIP_HomeOnlinePage from './pages/FRIP_HomeOnlinePage';
import FRIP_EventPage from './pages/FRIP_EventPage';

const FRIP_Global = React.createClass({
  getInitialState: function() {
    return {
      stompClient: null,
      donnees: [],
      page: "homeOffline"
    }
  },

  connexion: function () {
    if (this.state.stompClient === null) {
      console.log("Connexion");
      // Initiation de la connexion avec les sockets
      this.setState({page:"homeOnline"});
    }
  },

  render: function() {
    var homeOffline = (
      <div>
        <FRIP_HomeOfflinePage connexion={this.connexion}/>
      </div>
    );

    var homeOnline = (
      <div>
        <FRIP_HomeOnlinePage/>
      </div>
    );

    switch (this.state.page) {
      case "homeOffline":
        return homeOffline;
        break;

      case "homeOnline":
        return homeOnline;
        break;

      default:
        return homeOffline;
    }
  }
});

export default FRIP_Global;
