import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import ActionReorder from 'material-ui/svg-icons/action/reorder';
import ActionSearch from 'material-ui/svg-icons/action/search';

const parameters = require('../../data/parameters');
const styleNavbar = {backgroundColor: parameters.secondaryColor2, color:"black"};

const FRIP_NavbarOnline = React.createClass({
  getInitialState: function() {
    return {
      search: true,
      idIconSearch: "iconSearchShowed",
      idInputSearch: "inputSearchHidden",
    }
  },

  changeSearchDisplay: function() {
    if (this.state.search === true) {
      this.setState({
        search: false,
        idIconSearch: "iconSearchHidden",
        idInputSearch: "inputSearchShowed",
      });
    }
    else {
      this.setState({
        search: true,
        idIconSearch: "iconSearchShowed",
        idInputSearch: "inputSearchHidden",
      });
    }
  },

  inputSearchChange: function(e) {
    if (e.key === "Enter") {
      e.target.value = "";
      this.changeSearchDisplay();
    }
  },

  render: function() {
    var lengthMenuItem = this.props.text.iconMenu.length;
    var navbar = this;

    var avatar = (
      <IconButton
        style={{padding: 0, borderRadius: "50px"}}
        className="iconNavbar"
      >
        <Avatar size={50}>A</Avatar>
      </IconButton>
    );

    var iconLeft = (
      <IconButton
        onTouchTap={this.props.clickOnLeftButton}
        className="iconNavbar"
        style={{borderRadius: "50px", backgroundColor: parameters.primaryColor}}
      >
        <ActionReorder />
      </IconButton>
    );

    var iconRight = (
      <div className="navContentRight">
        <input
          id={this.state.idInputSearch}
          type="text"
          placeholder={this.props.text.search}
          name="search"
          onKeyPress={this.inputSearchChange}
        />

        <IconButton
          id={this.state.idIconSearch}
          onTouchTap={this.changeSearchDisplay}
        >
          <ActionSearch/>
        </IconButton>

        <IconMenu
          iconButtonElement={avatar}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
          <MenuItem
            onTouchTap={navbar.props.accessToParameters}
            primaryText={this.props.text.iconMenu[0]}
          />
          <MenuItem
            onTouchTap={navbar.props.accessToHelp}
            primaryText={this.props.text.iconMenu[1]}
          />
          <MenuItem
            onTouchTap={navbar.props.deconnexion}
            primaryText={this.props.text.iconMenu[2]}
          />
        </IconMenu>
      </div>
    );

    return (
      <AppBar
        id="navbar"
        title={this.props.text.title}
        iconElementLeft={iconLeft}
        iconElementRight={iconRight}
        style={styleNavbar}
      />
    );
  }
});




/*---------------------------------------*/




const FRIP_NavbarOffline = React.createClass({
  render: function() {
    return (
      <AppBar
        id="navbar"
        title={this.props.data.title}
        name={this.props.data.name}
        showMenuIconButton={false}
        style={styleNavbar}
      />
    );
  }
});

export {FRIP_NavbarOnline, FRIP_NavbarOffline};
