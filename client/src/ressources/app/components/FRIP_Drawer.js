import React from 'react';
import MenuItem from 'material-ui/MenuItem';

var FRIP_DrawerLeft = React.createClass({
  getDefaultProps: function() {
    return {
      open: true,
      id: "leftDrawerOpen"
   }
 },

  render: function() {
    return (
      <div id={this.props.id} open={this.props.open}>
        <MenuItem>Accueil</MenuItem>
        <MenuItem>Events</MenuItem>
      </div>
    );
  }
});

export default FRIP_DrawerLeft;
