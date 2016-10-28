import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import ActionReorder from 'material-ui/svg-icons/action/reorder';

var FRIP_NavbarOnline = React.createClass({
  render: function() {
    var lengthMenuItem = this.props.text.iconMenu.length;
    var navbar = this;

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
        <MenuItem onTouchTap={navbar.props.accessToParameters} primaryText={this.props.text.iconMenu[0]} />
        <MenuItem onTouchTap={navbar.props.accessToHelp} primaryText={this.props.text.iconMenu[1]} />
        <MenuItem onTouchTap={navbar.props.deconnexion} primaryText={this.props.text.iconMenu[2]} />
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

var FRIP_NavbarOffline = React.createClass({
  render: function() {
    var navbar = this;

    return (
      <AppBar
        id="navbar"
        title={this.props.text.title}
        name={this.props.text.name}
        showMenuIconButton={false}
      />
    );
  }
});

export {FRIP_NavbarOnline, FRIP_NavbarOffline};
