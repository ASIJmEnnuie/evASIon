import React from 'react';

import {FRIP_NavbarOnline} from '../components/FRIP_Navbar';
import FRIP_DrawerLeft from '../components/FRIP_Drawer';

import FRIP_HomePage from './online_pages/FRIP_HomePage';
import FRIP_EventPage from './online_pages/FRIP_EventPage';
import FRIP_EventCreationPage from './online_pages/FRIP_EventCreationPage';
import FRIP_ActivityPage from './online_pages/FRIP_ActivityPage';
import FRIP_ActivityCreationPage from './online_pages/FRIP_ActivityCreationPage';

import parameters from '../../data/parameters';

const FRIP_OnlineContainer = React.createClass({
  getInitialState: function () {
    return {
      drawerLeftId: "drawerLeftExtended",
      pageId: "pageReduced",
      openLeftDrawer: true,
      page: 0,
    }
  },

  changePage: function(event, menuItem, index) {
    if (index == 1 && this.props.stompClient != null) {
      this.props.stompClient.send("/app/events", {}, "");
    }

    this.setState({page: index});
    var breakpointSmall = parseInt(parameters.breakpoints.small.substring(0, parameters.breakpoints.small.length-2));
    if (this.props.screenWidth <= breakpointSmall) {
      this.clickOnLeftButton();
    }
  },

  accessToHomePage: function() {
    this.setState({page: 0});
  },

  accessToActivityCreationPage: function() {
    this.setState({page: 4});
  },

  accessToParameters: function() {
    console.log("paramètres");
  },

  accessToHelp: function() {
    console.log("aide");
  },

  clickOnLeftButton: function(){
    this.setState(function(previousState, currentProps) {
      if (previousState.openLeftDrawer === true) {
        return {
          openLeftDrawer : false,
          drawerLeftId: "drawerLeftReduced",
          pageId: "pageExtended"
        };
      }
      return {
        openLeftDrawer : true,
        drawerLeftId: "drawerLeftExtended",
        pageId: "pageReduced"
      };
    });
  },

  render: function() {
    var page = null;
    switch (this.state.page) {
      case 0:
        page = (
          <FRIP_HomePage
            id={this.state.pageId}
            screenWidth={this.props.screenWidth}
            screenHeight={this.props.screenHeight}
          />);
        break;
      case 1:
        page = (
          <FRIP_EventPage
            id={this.state.pageId}
            data={this.props.data.eventPage}
            stompClient={this.props.stompClient}
            eventList={this.props.eventList}
            userId={this.props.userId}
          />
        );
        break;
      case 2:
        page = (
          <FRIP_EventCreationPage
            id={this.state.pageId}
            data={this.props.data.eventCreation}
            accessToActivityCreationPage={this.accessToActivityCreationPage}
            accessToHomePage={this.accessToHomePage}
            stompClient={this.props.stompClient}
            userId={this.props.userId}
            activityList={this.props.activityList}
          />
        );
        break;
      case 3:
        page = (
          <FRIP_ActivityPage
            id={this.state.pageId}
            data={this.props.data.activityPage}
            stompClient={this.props.stompClient}
            activityList={this.props.activityList}
          />
        )
        break;
      case 4:
        page = (
          <FRIP_ActivityCreationPage
            id={this.state.pageId}
            data={this.props.data.activityCreation}
            accessToHomePage={this.accessToHomePage}
            stompClient={this.props.stompClient}
          />
        );
        break;
      default:
        page = (
          <FRIP_HomePage
            id={this.state.pageId}
            screenWidth={this.props.screenWidth}
            screenHeight={this.props.screenHeight}
          />);
    }
    return (
      <div>
        <FRIP_NavbarOnline
          clickOnLeftButton={this.clickOnLeftButton}
          text={this.props.data.navbar}
          accessToParameters={this.accessToParameters}
          accessToHelp={this.accessToHelp}
          deconnexion={this.props.deconnexion}
        />
        <div id="container">
          <FRIP_DrawerLeft
            id={this.state.drawerLeftId}
            changePage={this.changePage}
            itemList={this.props.data.drawerLeft.itemList}
            page={this.state.page}
            screenWidth={this.props.screenWidth}
          />
          {page}
        </div>
      </div>
    );
  }
});

export default FRIP_OnlineContainer;
