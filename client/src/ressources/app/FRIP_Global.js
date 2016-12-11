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
      container: "online",
      lang: "fr"
    }
  },

  connexion: function() {
    if (this.state.stompClient === null) {
      this.setState(function(prevState, props) {
        let stompClient = Stomp.over(new SockJS(serverAddress));

        stompClient.connect({}, (frame) => {
          stompClient.subscribe('/topic/EventList', (eventList) => {
            this.setState({
              eventList: JSON.parse(eventList.body)
            });
          });

          stompClient.subscribe('/topic/ActivityList', (activityList) => {
            this.setState({
              activityList: JSON.parse(activityList.body)
            });
          });
        });

        return {
          stompClient: stompClient,
          container: "online"
        };
      });
    }
  },

  deconnexion: function() {
    //TODO disconnect stompClient here
    this.setState({container: "offline"});
  },

  render: function() {
    let data = require("../data/" + this.state.lang + "/onlineContainer");
    let dataOffline = require("../data/" + this.state.lang + "/offlineContainer");

    let offlineContainer = (
      <FRIP_OfflineContainer
        data={dataOffline.offlineContainer}
        connexion={this.connexion}
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
