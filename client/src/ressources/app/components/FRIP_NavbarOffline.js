import React from 'react';
import AppBar from 'material-ui/AppBar';

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

export default FRIP_NavbarOffline;
