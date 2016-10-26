import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

var FRIP_DrawerLeft = React.createClass({
  getDefaultProps: function() {
    return {
      id: "leftDrawerOpen",
      itemList: []
   }
 },

  render: function() {
    var page = this.props.page;
    return (
      <div id={this.props.id}>
        <Menu onItemTouchTap={this.props.changePage}>
          {
            this.props.itemList.map(function(item, i){
              if (page == i) {
                return (
                  <MenuItem key={"menuItemDrawer"+i} id="pageSelected">{item}</MenuItem>
                );
              }
              return (
                <MenuItem key={"menuItemDrawer"+i}>{item}</MenuItem>
              );
            })
          }
        </Menu>
      </div>
    );
  }
});

export default FRIP_DrawerLeft;
