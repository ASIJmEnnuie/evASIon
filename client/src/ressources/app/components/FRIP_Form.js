import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';

var FRIP_FormConnexion = React.createClass({

  render: function() {
    return (
      <div>
        <h2 className="form-title">{this.props.text.nameFormConnexion}</h2>
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
      </div>
    );
  },
});

var FRIP_FormInscription = React.createClass({

  render: function() {
    return (
      <div>
        <h2 className="form-title">{this.props.text.nameFormInscription}</h2>
        <TextField
          id="name"
          placeholder={this.props.text.name}
          className="form-text"
        /><br />
        <TextField
          id="surname"
          placeholder={this.props.text.surname}
          className="form-text"
        /><br />
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
        <TextField
          id="passwordConfirmation"
          type="password"
          placeholder={this.props.text.passwordConfirmation}
          className="form-text"
        /><br />
      </div>
    );
  },
});



export {FRIP_FormConnexion, FRIP_FormInscription};
