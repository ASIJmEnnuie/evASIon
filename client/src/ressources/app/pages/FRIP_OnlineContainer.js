import React from 'react';

import FRIP_NavbarOnline from '../components/FRIP_Navbar';
import FRIP_DrawerLeft from '../components/FRIP_Drawer';

const FRIP_onlineContainer = React.createClass({
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
        <FRIP_DrawerLeft
          id={this.state.drawerLeftId}
          changePage={this.props.changePage}
          itemList={this.props.itemList}
        />
        <div id={this.state.pageId}>
          <FRIP_NavbarOnline clickOnLeftButton={this.clickOnLeftButton}/>
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default FRIP_onlineContainer;
