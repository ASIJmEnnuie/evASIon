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
    const breakpoints = require("../../data/parameters.json").breakpoints;
    let page = this.props.page;
    let style = {};

    if (this.props.screenWidth <= parseInt(breakpoints.small, 10)) {
      style = {
        fontSize: "25px",
        textAlign: "center",
      };
    }

    return (
      <div id={this.props.id}>
        <Menu onItemTouchTap={this.props.changePage}>
          {
            this.props.itemList.map(function(item, i){
              if (page == i) {
                return (
                  <MenuItem
                    key={"menuItemDrawer"+i}
                    id="pageSelected"
                    style={style}
                  >
                    {item}
                  </MenuItem>
                );
              }
              return (
                <MenuItem
                  key={"menuItemDrawer"+i}
                  style={style}
                >
                  {item}
                </MenuItem>
              );
            })
          }
        </Menu>
      </div>
    );
  }
});

export default FRIP_DrawerLeft;
