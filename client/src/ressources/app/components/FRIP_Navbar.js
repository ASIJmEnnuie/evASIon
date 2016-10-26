import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import ActionReorder from 'material-ui/svg-icons/action/reorder';

var FRIP_NavbarOnline = React.createClass({
  render: function() {
    var avatar = (
      <IconButton style={{padding: 0}}>
        <Avatar size={40}>A</Avatar>
      </IconButton>
    );

    var iconLeft = (
      <IconButton onTouchTap={this.props.clickOnLeftButton}>
        <ActionReorder />
      </IconButton>
    );

    var iconRight = (
      <IconMenu
        iconButtonElement={avatar}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
      {
        this.props.text.iconMenu.map(function(value, i) {
          return (
            <MenuItem key={"menuItemNavbar"+i} primaryText={value} />
          );
        })
      }
      </IconMenu>
    );

    return (
      <AppBar
        id="navbar"
        title={this.props.text.title}
        iconElementLeft={iconLeft}
        iconElementRight={iconRight}
      />
    );
  }
});

export default FRIP_NavbarOnline;
