import React from 'react';

import {FRIP_NavbarOnline} from '../components/FRIP_Navbar';
import FRIP_DrawerLeft from '../components/FRIP_Drawer';

import FRIP_HomePage from './online_pages/FRIP_HomePage';
import FRIP_EventPage from './online_pages/FRIP_EventPage';

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
    this.setState({page: index});
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
        page = (<FRIP_EventPage id={this.state.pageId}/>);
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
          />
          {page}
        </div>
      </div>
    );
  }
});

export default FRIP_OnlineContainer;
