import React from 'react';

import FRIP_NavbarOnline from '../components/FRIP_Navbar';
import FRIP_DrawerLeft from '../components/FRIP_Drawer';

import FRIP_HomePage from './online_pages/FRIP_HomePage';
import FRIP_EventPage from './online_pages/FRIP_EventPage';

const itemList = ["Accueil", "Évènements"];

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
        page = (<FRIP_HomePage/>);
        break;
      case 1:
        page = (<FRIP_EventPage/>);
        break;
      default:
        page = (<FRIP_HomePage/>);
    }
    var value = (<div><h1>Hello world</h1></div>);
    return (
      <div>
        <FRIP_DrawerLeft
          id={this.state.drawerLeftId}
          changePage={this.changePage}
          itemList={itemList}
        />
        <div id={this.state.pageId}>
          <FRIP_NavbarOnline clickOnLeftButton={this.clickOnLeftButton}/>
          {page}
        </div>
      </div>
    );
  }
});

export default FRIP_OnlineContainer;
