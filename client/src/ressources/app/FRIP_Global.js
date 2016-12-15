import React from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

import FRIP_OfflineContainer from './containers/FRIP_OfflineContainer';
import FRIP_OnlineContainer from './containers/FRIP_OnlineContainer';

const serverAddress = 'http://localhost:8080/evasion';

const FRIP_Global = React.createClass({
  getInitialState: function() {
    return {
      stompClient: null,
      eventList: require("../data/events").events,
      activityList: require("../data/activities").activities,
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth,
      container: "offline",
      lang: "fr",
      userId: "",
    }
  },

  serverConnexion: function() {
    if (this.state.stompClient === null) {
      this.setState(function(prevState, props) {
          console.log("dans la function !!!!!!!!!");
        let stompClient = Stomp.over(new SockJS(serverAddress));

        stompClient.connect({}, (frame) => {
          stompClient.subscribe('/topic/eventlist', (eventList) => {
            this.setState({
              eventList: JSON.parse(eventList.body)
            });
          });

          stompClient.subscribe('/topic/listeActivites', (getAllActivities) => {
            this.setState({
              activityList: JSON.parse(getAllActivities.body)
            });
          });

          // TODO: assurer ici la récupération des paramètres de connexion au serveur.
          // Ceci est actuellement un exemple non representatif de l'état final mais aidant à la compréhension de la suite du code
          stompClient.subscribe('/topic/connexion', (connexion) => {
            this.setState({
              userId: JSON.parse(connexion.body)
            });
          });
        });

        return {
          stompClient: stompClient,
        };
      });
    }
  },

  serverDeconnexion: function() {
    //TODO disconnect stompClient here
  },

  connexion: function() {
    this.setState({container: "online"});
  },

  deconnexion: function() {
    this.setState({container: "offline"});
    this.serverDeconnexion();
  },

  render: function() {
    let data = require("../data/" + this.state.lang + "/onlineContainer");
    let dataOffline = require("../data/" + this.state.lang + "/offlineContainer");

    let offlineContainer = (
      <FRIP_OfflineContainer
        data={dataOffline.offlineContainer}
        connexion={this.connexion}
        serverConnexion={this.serverConnexion}
        stompClient={this.state.stompClient}
      />
    );

    let onlineContainer = (
      <FRIP_OnlineContainer
        data={data.onlineContainer}
        deconnexion={this.deconnexion}
        screenWidth={this.state.screenWidth}
        screenHeight={this.state.screenHeight}
        eventList={this.state.eventList}
        activityList={this.state.activityList}
        stompClient={this.state.stompClient}
        userId={this.state.userId}
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
