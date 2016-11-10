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

var notDisplay = function (id) {
    var obj = document.getElementById(id);
    obj.style.display='none';
};

var display = function (id) {
  var obj = document.getElementById(id);
  obj.style.display='block';
};

var errorDisplay = function(state, id) {
  if (state.length > 0)
    notDisplay(id);
  else
    display(id);
};

var FRIP_FormConnexion = React.createClass({
  getInitialState: function() {
    return {
      email: "",
      password: "",
    }
  },

  handleSubmit: function() {
    if (!this.state.email.trim() || !this.state.password.trim()) {
      return ;
    }
    // envoie à la BD pour control
    // si control valide, alors :
    this.props.connexion();
    console.log("email : "+this.state.email);
    console.log("password : "+this.state.password);
  },

  setEmail: function(event) {
    this.setState({email: event.target.value});
    errorDisplay(event.target.value, "emailError");
  },

  setPassword: function(event) {
    this.setState({password: event.target.value});
    errorDisplay(event.target.value, "passwordError");
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2 className="form-title">{this.props.text.nameFormConnexion}</h2>
          <div>
            <TextField
              id="email"
              placeholder={this.props.text.email}
              className="form-text"
              onChange={this.setEmail}
            />
          </div>
          <ErrorText id="emailError" text={this.props.text.errorText} />
          <div>
            <TextField
              id="password"
              type="password"
              placeholder={this.props.text.password}
              className="form-text"
              onChange={this.setPassword}
            />
          </div>
          <ErrorText id="passwordError" text={this.props.text.errorText} />
          <RaisedButton type="submit" value="Submit" className="form-button" label={this.props.label} primary={true}/>
        </form>
      </div>
    );
  },
});

var FRIP_FormInscription = React.createClass({
  getInitialState: function() {
    return {
      familyName: "",
      firstname: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    }
  },

  handleSubmit: function() {
    if (!this.state.familyName.trim() || !this.state.firstname.trim() || !this.state.email.trim() || !this.state.password.trim() || !this.state.passwordConfirmation.trim()) {
      return ; // mettre action pour rester sur cette page
    }
    // envoie à la BD pour control
    // si control valide, alors :
    this.props.connexion();
    console.log("familyName : "+this.state.familyName);
    console.log("firstname : "+this.state.firstname);
    console.log("email : "+this.state.email);
    console.log("password : "+this.state.password);
    console.log("passwordConfirmation : "+this.state.passwordConfirmation);
  },

  setFamilyName: function(event) {
    this.setState({familyName: event.target.value});
    errorDisplay(event.target.value, "familyNameError");
  },

  setFirstname: function(event) {
    this.setState({firstname: event.target.value});
    errorDisplay(event.target.value, "firstnameError");
  },

  setEmail: function(event) {
    this.setState({email: event.target.value});
    errorDisplay(event.target.value, "emailError");
  },

  setPassword: function(event) {
    this.setState({password: event.target.value});
    errorDisplay(event.target.value, "passwordError");
    this.errorPassword("password", event.target.value, "passwordConfirmationError");
  },

  setPasswordConfirmation: function(event) {
    this.setState({passwordConfirmation: event.target.value});
    this.errorPassword("passwordConfirmation", event.target.value, "passwordConfirmationError");
  },

  errorPassword: function(name, value, idError) {
    if (name == "password") {
      if (value == this.state.passwordConfirmation)
        notDisplay(idError);
      else
        display(idError);
    }
    else {
      if (name == "passwordConfirmation") {
        if (value == this.state.password)
          notDisplay(idError);
        else
          display(idError);
      }
    }
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2 className="form-title">{this.props.text.nameFormInscription}</h2>
          <div>
            <TextField
              id="familyName"
              placeholder={this.props.text.familyName}
              className="form-text"
              onChange={this.setFamilyName}
            />
          </div>
          <ErrorText id="familyNameError" text={this.props.text.errorText} />
          <div>
            <TextField
              id="firstname"
              placeholder={this.props.text.firstname}
              className="form-text"
              onChange={this.setFirstname}
            />
          </div>
          <ErrorText id="firstnameError" text={this.props.text.errorText} />
          <div>
            <TextField
              id="email"
              placeholder={this.props.text.email}
              className="form-text"
              onChange={this.setEmail}
            />
          </div>
          <ErrorText id="emailError" text={this.props.text.errorText} />
          <div>
            <TextField
              id="password"
              type="password"
              placeholder={this.props.text.password}
              className="form-text"
              onChange={this.setPassword}
            />
          </div>
          <ErrorText id="passwordError" text={this.props.text.errorText} />
          <div>
            <TextField
              id="passwordConfirmation"
              type="password"
              placeholder={this.props.text.passwordConfirmation}
              className="form-text"
              onChange={this.setPasswordConfirmation}
            />
          </div>
          <ErrorText id="passwordConfirmationError" text={this.props.text.errorTextDifferentPassword} />
          <RaisedButton type="submit" className="form-button" label={this.props.label} primary={true}/>
        </form>
      </div>
    );
  },
});



export {FRIP_FormConnexion, FRIP_FormInscription};
