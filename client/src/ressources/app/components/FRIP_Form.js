import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

var ErrorText = React.createClass({

  render: function() {
    return (
      <div id={this.props.id} className="form-error" >
        {this.props.text}
      </div>
    );
  }
});

var FRIP_FormConnexion = React.createClass({
  getInitialState: function() {
    return {
      email: "",
      password: "",
    }
  },

  handleSubmit: function() {
    // envoie à la BD pour control
    if (!this.state.email.trim() || !this.state.password.trim()) {
      return ;
    }
    this.props.connexion();
  },

  disparaitre: function (id) {
    var obj = document.getElementById(id);
    obj.style.display='none';
  },

  setEmail: function(event) {
    this.setState({email: event.target.value});
    this.disparaitre("emailError");
  },

  setPassword: function(event) {
    this.setState({password: event.target.value});
    this.disparaitre("passwordError");
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2 className="form-title">{this.props.text.nameFormConnexion}</h2>
          <div>
            <TextField
              id="email"
              type="email"
              placeholder={this.props.text.email}
              className="form-text"
              onChange={this.setEmail}
            />
          </div>
          <div>
            <ErrorText id="emailError" text={this.props.text.errorText} />
          </div>
          <div>
            <TextField
              id="password"
              type="password"
              placeholder={this.props.text.password}
              className="form-text"
              onChange={this.setPassword}
            />
        </div>
        <div>
          <ErrorText id="passwordError" text={this.props.text.errorText} />
        </div>
        <div>
          <RaisedButton type="submit" value="Submit" className="form-button" label={this.props.label} primary={true}/>
        </div>
        </form>
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
        <RaisedButton className="form-button" label={this.props.label} primary={true} onTouchTap={this.props.connexion}/>
      </div>
    );
  },
});



export {FRIP_FormConnexion, FRIP_FormInscription};
