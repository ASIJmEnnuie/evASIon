import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


var FRIP_FormConnection = React.createClass({
  getInitialState: function() {
    return {
      contact:  React.PropTypes.object.isRequired
    }
  },

  render: function() {
    var form = this;
    return (
      <div>
        <h2 className="form-title">Connection</h2>
        <TextField
          id="email"
          placeholder={this.props.text.email}
          className="form-text"
        /><br />
        <TextField
          id="password"
          type="password"
          placeholder={this.props.text.password}
          className="form-text"
        /><br />
      <RaisedButton className="form-button" label="Connexion" primary={true} onTouchTap={form.props.connexion}/>
      </div>
    );
  },
});



export {FRIP_FormConnection};
