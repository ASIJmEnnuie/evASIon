import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import areIntlLocalesSupported from 'intl-locales-supported';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

let DateTimeFormat;

var lang = require("../../data/lang");
if (lang.lang == "fr") {
  if (areIntlLocalesSupported(['fr'])) {
    DateTimeFormat = global.Intl.DateTimeFormat;
  }
}

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
    // if (!this.state.email.trim() || !this.state.password.trim()) {
    //   display("globalConnexionError") ;
    // }
    // else {
      // envoie à la BD pour control
      // si control valide, alors :
      this.props.connexion();
    //}

    // à enlever
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
        <form>
          <h2 className="form-title">{this.props.text.nameFormConnexion}</h2>
          <div className="form-champ">
            <TextField
              id="email"
              placeholder={this.props.text.email}
              className="form-text"
              onBlur={this.setEmail}
            />
            <ErrorText id="emailError" text={this.props.text.errorText} />
          </div>
          <div className="form-champ">
            <TextField
              id="password"
              type="password"
              placeholder={this.props.text.password}
              className="form-text"
              onBlur={this.setPassword}
            />
            <ErrorText id="passwordError" text={this.props.text.errorText} />
          </div>
          <div className="form-validation">
            <RaisedButton value="Submit" className="form-button" label={this.props.label} primary={true} onTouchTap={this.handleSubmit}/>
            <ErrorText id="globalConnexionError" text={this.props.text.errorTextAllAreRequired} />
          </div>
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
      gender: "",
      value: undefined,
      birthday: undefined,
    }
  },

  handleSubmit: function() {
    if (!this.state.familyName.trim() || !this.state.firstname.trim() || !this.state.email.trim() || !this.state.password.trim() || !this.state.passwordConfirmation.trim() || (this.state.password!=this.state.passwordConfirmation)) {
      return display("globalInscriptionError");
    }
    else {
      // envoie à la BD pour control
      // si control valide, alors :
      this.props.connexion();
    }

    // à enlever
    console.log("familyName : "+this.state.familyName);
    console.log("firstname : "+this.state.firstname);
    console.log("email : "+this.state.email);
    console.log("password : "+this.state.password);
    console.log("passwordConfirmation : "+this.state.passwordConfirmation);
    console.log("genre : "+this.state.gender);
    console.log("date de naissance : "+this.state.birthday.toString());
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

  setGender: function(event, index, value) {
    this.setState({value});
    if (value == 1)
      this.setState({gender : "Female"});
    else {
      if (value == 2)
        this.setState({gender: "Male"});
    }
  },

  setBirthday: function(event, date) {
    this.setState({birthday: date});
  },

  render: function() {

    return (
      <div>
        <form>
          <h2 className="form-title">{this.props.text.nameFormInscription}</h2>
          <div className="form-champ">
            <TextField
              id="name"
              placeholder={this.props.text.familyName}
              className="form-text"
              onBlur={this.setFamilyName}
            />
            <ErrorText id="familyNameError" text={this.props.text.errorText} />
          </div>
          <div className="form-champ">
            <TextField
              id="firstname"
              placeholder={this.props.text.firstname}
              className="form-text"
              onBlur={this.setFirstname}
            />
            <ErrorText id="firstnameError" text={this.props.text.errorText} />
          </div>
          <div className="form-champ">
            <TextField
              id="email"
              placeholder={this.props.text.email}
              className="form-text"
              onBlur={this.setEmail}
            />
            <ErrorText id="emailError" text={this.props.text.errorText} />
          </div>
          <div className="form-champ">
            <TextField
              id="password"
              type="password"
              placeholder={this.props.text.password}
              className="form-text"
              onBlur={this.setPassword}
            />
            <ErrorText id="passwordError" text={this.props.text.errorText} />
          </div>
          <div className="form-champ">
            <TextField
              id="passwordConfirmation"
              type="password"
              placeholder={this.props.text.passwordConfirmation}
              className="form-text"
              onChange={this.setPasswordConfirmation}
            />
            <ErrorText id="passwordConfirmationError" text={this.props.text.errorTextDifferentPassword} />
          </div>
          <div className="form-select-field">
            <SelectField
              id="gender"
              className="form-select-gender"
              value={this.state.value}
              onChange={this.setGender}
              hintText={this.props.text.gender}
            >
              <MenuItem value={1} primaryText={this.props.text.female} className="form-select-gender"/>
              <MenuItem value={2} primaryText={this.props.text.male} className="form-select-gender"/>
            </SelectField>
          </div>
          <div className="form-select-field">
            <DatePicker
              id="birthday"
              hintText={this.props.text.birthday}
              onChange={this.setBirthday}
              DateTimeFormat={DateTimeFormat}
              okLabel={this.props.text.okLabel}
              cancelLabel={this.props.text.cancelLabel}
              locale={this.props.text.locale}
            />
          </div>
          <div>
            <RaisedButton className="form-button" label={this.props.label} primary={true} onTouchTap={this.handleSubmit}/>
            <ErrorText id="globalInscriptionError" text={this.props.text.errorTextAllAreRequired} />
          </div>
          </form>
      </div>
    );
  },
});

var FRIP_FormEventCreation = React.createClass({
  getInitialState: function() {
    return {
      eventName: "",
      eventPlace: "",
      meetingPlace: "",
      eventDate: undefined,
      nbMemberMax: undefined,
    }
  },

  handleSubmit: function() {
    if (!this.state.eventName.trim() || !this.state.eventPlace.trim() || !(this.state.eventDate.toString().length > 0) ) {
      return display("globalEventCreationError");
    }
    else {
      // envoie à la BD pour control
      // si control valide, alors :
      //this.props.eventCreation();
      console.log("evénement créé")
    }

    // à enlever
    console.log("eventName : "+this.state.eventName);
    console.log("eventPlace : "+this.state.eventPlace);
    console.log("meetingPlace : "+this.state.meetingPlace);
    console.log("eventDate : "+this.state.eventDate.toString());
    console.log("nbMemberMax : "+this.state.nbMemberMax);
  },

  setEventName: function(event) {
    this.setState({eventName: event.target.value});
    errorDisplay(event.target.value, "eventNameError");
  },

  setEventPlace: function(event) {
    this.setState({eventPlace: event.target.value});
    errorDisplay(event.target.value, "eventPlaceError");
  },

  setMeetingPlace: function(event) {
    this.setState({meetingPlace: event.target.value});
  },

  setEventDate: function(event, date) {
    this.setState({eventDate: date});
  },

  setNbMemberMax: function(event) {
    this.setState({nbMemberMax: event.target.value});
  },

  render: function() {

    return (
      <div>
        <form>
          <h2 className="form-title">{this.props.text.nameFormEventCreation}</h2>
          <div className="form-champ">
            <TextField
              id="eventName"
              placeholder={this.props.text.eventName}
              className="form-text"
              onBlur={this.setEventName}
            />
          <ErrorText id="eventNameError" text={this.props.text.errorText} />
          </div>
          <div className="form-champ">
            <TextField
              id="eventPlace"
              placeholder={this.props.text.eventPlace}
              className="form-text"
              onBlur={this.setEventPlace}
            />
          <ErrorText id="eventPlaceError" text={this.props.text.errorText} />
          </div>
          <div className="form-champ">
            <TextField
              id="meetingPlace"
              placeholder={this.props.text.meetingPlace}
              className="form-text"
              onBlur={this.setMeetingPlace}
            />
          </div>
          <div className="form-select-field">
            <DatePicker
              id="eventDate"
              hintText={this.props.text.eventDate}
              onChange={this.setEventDate}
              DateTimeFormat={DateTimeFormat}
              okLabel={this.props.text.okLabel}
              cancelLabel={this.props.text.cancelLabel}
              locale={this.props.text.locale}
            />
          </div>
          <div className="form-champ">
            <TextField
              id="nbMemberMax"
              placeholder={this.props.text.nbMemberMax}
              className="form-text"
              onBlur={this.setNbMemberMax}
            />
          </div>
          <div>
            <RaisedButton className="form-button" label={this.props.label} primary={true} onTouchTap={this.handleSubmit}/>
            <ErrorText id="globalEventCreationError" text={this.props.text.errorTextAllAreRequired} />
          </div>
          </form>
      </div>
    );
  },
});



export {FRIP_FormConnexion, FRIP_FormInscription, FRIP_FormEventCreation};
