import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

var FRIP_Popup = React.createClass({

  getInitialState: function() {
    return {
      open: false,
    }
  },

  handleOpen: function() {
    this.setState({open: true});
  },

  handleClose: function() {
    this.setState({open: false});
    this.props.accessToHomePage()
  },

  render: function() {
    const actions = [
      <FlatButton
        label={this.props.buttonLabel}
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title={this.props.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {this.props.text}
        </Dialog>
      </div>
    );
  }
});

export default FRIP_Popup;
