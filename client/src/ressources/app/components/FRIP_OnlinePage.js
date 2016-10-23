import React from 'react';

import FRIP_NavbarOnline from './FRIP_Navbar';
import FRIP_DrawerLeft from './FRIP_Drawer';

const FRIP_OnlinePage = React.createClass({
  getInitialState: function () {
    return {
      drawerLeftId: "drawerLeftExtended",
      pageId: "pageReduced",
      openLeftDrawer: true,
    }
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
    return (
      <div>
        <FRIP_DrawerLeft id={this.state.drawerLeftId}/>
        <div id={this.state.pageId}>
          <FRIP_NavbarOnline clickOnLeftButton={this.clickOnLeftButton}/>
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default FRIP_OnlinePage;
