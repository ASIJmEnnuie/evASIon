import React from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

import FRIP_HomeOfflinePage from './pages/FRIP_HomeOfflinePage';
import FRIP_HomeOnlinePage from './pages/FRIP_HomeOnlinePage';
import FRIP_EventPage from './pages/FRIP_EventPage';

const itemList = ["Accueil", "Évènements"];

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

  changePage: function(event, menuItem, index) {
    switch (index) {
      case 0:
        this.setState({page:"homeOnline"});
        break;
      case 1:
        this.setState({page:"event"});
        break;
      default:
        this.setState({page:"homeOnline"});
    }
  },

  render: function() {
    var homeOfflinePage = (
      <FRIP_HomeOfflinePage connexion={this.connexion}/>
    );

    var homeOnlinePage = (
      <FRIP_HomeOnlinePage changePage={this.changePage} itemList={itemList}/>
    );

    var eventPage = (
      <FRIP_EventPage changePage={this.changePage} itemList={itemList}/>
    );

    switch (this.state.page) {
      case "homeOffline":
        return homeOfflinePage;
        break;

      case "homeOnline":
        return homeOnlinePage;
        break;

      case "event":
        return eventPage;
        break;

      default:
        return homeOffline;
    }
  }
});

export default FRIP_Global;
