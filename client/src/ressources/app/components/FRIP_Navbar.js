import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionReorder from 'material-ui/svg-icons/action/reorder';

var FRIP_IconLeft = React.createClass({
  render: function() {
    return(
      <IconButton onTouchTap={this.props.openLeftDrawer}>
        <ActionReorder />
      </IconButton>
    );
  }
});

var FRIP_NavbarOnline = React.createClass({
  render: function() {
    return (
      <AppBar
        title={this.props.title}
        iconElementLeft={<FRIP_IconLeft openLeftDrawer={this.props.clickOnLeftButton} />}
      />
    );
  }
});

export default FRIP_NavbarOnline;
