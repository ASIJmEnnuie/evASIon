import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import areIntlLocalesSupported from 'intl-locales-supported';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FRIP_Popup from './FRIP_Popup';

let DateTimeFormat;

var lang = require("../../data/lang");
// TODO à redéfinir avec une vaiable propre à la session ?
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
    // A DECOMMENTER
    // if (!this.state.email.trim() || !this.state.password.trim()) {
    //   display("globalError");
    // }
    // else {
      // TODO var formValid = CONTROLE BD (this.state.email,this.state.password) : true ou false
      // if formValid {
        this.props.connexion();
      // }
      // else {
        // notDisplay("globalError");
        // display("globalConnexionError");
      // }

    //}

    // A ENLEVER
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
          <h2 className="form-title">{this.props.data.nameFormConnexion}</h2>
          <div className="form-champ">
            <TextField
              id="email"
              placeholder={this.props.data.email}
              className="form-text"
              onBlur={this.setEmail}
            />
            <ErrorText id="emailError" text={this.props.data.errorText} />
          </div>
          <div className="form-champ">
            <TextField
              id="password"
              type="password"
              placeholder={this.props.data.password}
              className="form-text"
              onBlur={this.setPassword}
            />
            <ErrorText id="passwordError" text={this.props.data.errorText} />
          </div>
          <div className="form-validation">
            <RaisedButton value="Submit" className="form-button" label={this.props.data.buttonConnexionLabel} primary={true} onTouchTap={this.handleSubmit}/>
            <ErrorText id="globalError" text={this.props.data.errorTextAllAreRequired} />
            <ErrorText id="globalConnexionError" text={this.props.data.errorInfo} />
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
      // TODO ENVOI BD
      this.props.connexion();
    }

    // A ENLEVER
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

  setBirthday: function(event, value) {
    this.setState({birthday: value});
  },

  render: function() {

    return (
      <div>
        <form>
          <h2 className="form-title">{this.props.data.nameFormInscription}</h2>
          <div className="form-content">
            <div className="form-champ">
              <TextField
                id="name"
                placeholder={this.props.data.familyName}
                className="form-text"
                onBlur={this.setFamilyName}
              />
              <ErrorText id="familyNameError" text={this.props.data.errorText} />
            </div>
            <div className="form-champ">
              <TextField
                id="firstname"
                placeholder={this.props.data.firstname}
                className="form-text"
                onBlur={this.setFirstname}
              />
              <ErrorText id="firstnameError" text={this.props.data.errorText} />
            </div>
            <div className="form-champ">
              <TextField
                id="email"
                placeholder={this.props.data.email}
                className="form-text"
                onBlur={this.setEmail}
              />
              <ErrorText id="emailError" text={this.props.data.errorText} />
            </div>
            <div className="form-champ">
              <TextField
                id="password"
                type="password"
                placeholder={this.props.data.password}
                className="form-text"
                onBlur={this.setPassword}
              />
              <ErrorText id="passwordError" text={this.props.data.errorText} />
            </div>
            <div className="form-champ">
              <TextField
                id="passwordConfirmation"
                type="password"
                placeholder={this.props.data.passwordConfirmation}
                className="form-text"
                onChange={this.setPasswordConfirmation}
              />
              <ErrorText id="passwordConfirmationError" text={this.props.data.errorTextDifferentPassword} />
            </div>
            <div className="form-select-field">
              <SelectField
                id="gender"
                value={this.state.value}
                onChange={this.setGender}
                hintText={this.props.data.gender}
              >
                <MenuItem value={1} primaryText={this.props.data.female} className="form-select-content"/>
                <MenuItem value={2} primaryText={this.props.data.male} className="form-select-content"/>
              </SelectField>
            </div>
            <div className="form-select-field">
              <DatePicker
                id="birthday"
                hintText={this.props.data.birthday}
                onChange={this.setBirthday}
                DateTimeFormat={DateTimeFormat}
                okLabel={this.props.data.okLabel}
                cancelLabel={this.props.data.cancelLabel}
                locale={this.props.data.locale}
              />
            </div>
          </div>
          <div className="form-validation">
            <RaisedButton className="form-button" label={this.props.data.buttonInscriptionLabel} primary={true} onTouchTap={this.handleSubmit}/>
            <ErrorText id="globalInscriptionError" text={this.props.data.errorTextAllAreRequired} />
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
      eventMeetingPlace: "",
      eventDate: undefined,
      eventTime: undefined,
      eventDateEnd: undefined,
      eventTimeEnd: undefined,
      eventMemberMax: undefined,
      eventDescription: "",
    }
  },

  handleSubmit: function() {
    if (!this.state.eventName.trim() || !this.state.eventPlace.trim() || !(this.state.eventDate) || !(this.state.eventTime) ) {
      var obj = document.getElementById("globalEventCreationError");
      obj.style.display='block';
      return false;
    }
    else {
      return true;
    }
  },

  setEventName: function(event) {
    this.setState({eventName: event.target.value});
    errorDisplay(event.target.value, "eventNameError");
  },

  setEventPlace: function(event) {
    this.setState({eventPlace: event.target.value});
    errorDisplay(event.target.value, "eventPlaceError");
  },

  setEventMeetingPlace: function(event) {
    this.setState({eventMeetingPlace: event.target.value});
  },

  setEventDate: function(event, value) {
    this.setState({eventDate: value});
  },

  setEventTime: function(event, value) {
    this.setState({eventTime: value});
  },

  setEventDateEnd: function(event, value) {
    this.setState({eventDateEnd: value});
  },

  setEventTimeEnd: function(event, value) {
    this.setState({eventTimeEnd: value});
  },

  setEventMemberMax: function(event) {
    this.setState({eventMemberMax: event.target.value});
  },

  setEventDescription: function(event) {
    this.setState({eventDescription: event.target.value});
  },

  render: function() {

    return (
      <div>
        <form>
          <h2 className="form-title">{this.props.data.nameFormEventCreation}</h2>
          <div className="form-champ">
            <TextField
              id="eventName"
              placeholder={this.props.data.eventName}
              className="form-text"
              onBlur={this.setEventName}
            />
          <ErrorText id="eventNameError" text={this.props.data.errorText} />
          </div>
          <div className="form-champ">
            <TextField
              id="eventPlace"
              placeholder={this.props.data.eventPlace}
              className="form-text"
              onBlur={this.setEventPlace}
            />
          <ErrorText id="eventPlaceError" text={this.props.data.errorText} />
          </div>
          <div className="form-champ">
            <TextField
              id="eventMeetingPlace"
              placeholder={this.props.data.eventMeetingPlace}
              className="form-text"
              onBlur={this.setEventMeetingPlace}
            />
          </div>
          <div className="form-select-field">
            <DatePicker
              id="eventDate"
              hintText={this.props.data.eventDate}
              onChange={this.setEventDate}
              DateTimeFormat={DateTimeFormat}
              okLabel={this.props.data.okLabel}
              cancelLabel={this.props.data.cancelLabel}
              locale={this.props.data.locale}
            />
          </div>
          <div className="form-select-field">
            <TimePicker
              id="eventTime"
              hintText={this.props.data.eventTime}
              onChange={this.setEventTime}
              autoOk={true}
              format={this.props.data.timeFormat}
              okLabel={this.props.data.okLabel}
              cancelLabel={this.props.data.cancelLabel}
            />
          </div>
          <div className="form-select-field">
            <DatePicker
              id="eventDateEnd"
              hintText={this.props.data.eventDateEnd}
              onChange={this.setEventDateEnd}
              DateTimeFormat={DateTimeFormat}
              okLabel={this.props.data.okLabel}
              cancelLabel={this.props.data.cancelLabel}
              locale={this.props.data.locale}
            />
          </div>
          <div className="form-select-field">
            <TimePicker
              id="eventTimeEnd"
              hintText={this.props.data.eventTimeEnd}
              onChange={this.setEventTimeEnd}
              autoOk={true}
              format={this.props.data.timeFormat}
              okLabel={this.props.data.okLabel}
              cancelLabel={this.props.data.cancelLabel}
            />
          </div>
          <div className="form-champ">
            <TextField
              id="eventMemberMax"
              placeholder={this.props.data.eventMemberMax}
              className="form-text"
              onBlur={this.setEventMemberMax}
              type="number"
            />
          </div>
          <div className="form-champ">
            <TextField
              id="eventDescription"
              placeholder={this.props.data.eventDescription}
              className="form-text"
              onBlur={this.setEventDescription}
            />
          </div>
          <div className="form-event-validation">
            <ErrorText id="globalEventCreationError" text={this.props.data.errorTextAllAreRequired} />
          </div>
        </form>
      </div>
    );
  },
});


var FRIP_FormActivityCreation = React.createClass({
  getInitialState: function() {
    return {
      activityName: "",
      activityPlace: "",
      activityDescription: "",
      activityPrice: undefined,
      activityCategory: "",
      activityWebsite: "",
    }
  },

  handleSubmit: function() {
    if (!this.state.activityName.trim()) {
      var obj = document.getElementById("globalActivityCreationError");
      obj.style.display='block';
      return false;
    }
    else {
      // TODO envoie BD
      this.refs.popupCreationActivity.handleOpen();

      // A ENLEVER
      console.log("L'activité a bien été crée");
      console.log("activityName : "+this.state.activityName);
      console.log("activityPlace : "+this.state.activityPlace);
      console.log("activityDescription : "+this.state.activityDescription);
      console.log("activityPrice : "+this.state.activityPrice);
      console.log("activityCategory : "+this.state.activityCategory);
      console.log("activityWebsite : "+this.state.activityWebsite);
    }
  },

  setActivityName: function(event) {
    this.setState({activityName: event.target.value});
    errorDisplay(event.target.value, "activityNameError");
  },

  setActivityPlace: function(event) {
    this.setState({activityPlace: event.target.value});
  },

  setActivityDescription: function(event) {
    this.setState({activityDescription: event.target.value});
  },

  setActivityPrice: function(event) {
    this.setState({activityPrice: event.target.value});
  },

  setActivityCategory: function(event) {
    this.setState({activityCategory: event.target.value});
  },

  setActivityWebsite: function(event) {
    this.setState({activityWebsite: event.target.value});
  },

  render: function() {

    return (
      <div>
        <form>
          <h2 className="form-title">{this.props.data.nameFormActivityCreation}</h2>
          <div className="form-champ">
            <TextField
              id="activityName"
              placeholder={this.props.data.activityName}
              className="form-text"
              onBlur={this.setActivityName}
            />
          <ErrorText id="activityNameError" text={this.props.data.errorText} />
          </div>
          <div className="form-champ">
            <TextField
              id="activityPlace"
              placeholder={this.props.data.activityPlace}
              className="form-text"
              onBlur={this.setActivityPlace}
            />
          </div>
          <div className="form-champ">
            <TextField
              id="activityDescription"
              placeholder={this.props.data.activityDescription}
              className="form-text"
              onBlur={this.setActivityDescription}
            />
          </div>
          <div className="form-champ">
            <TextField
              id="activityPrice"
              placeholder={this.props.data.activityPrice}
              className="form-text"
              onBlur={this.setActivityPrice}
              type="number"
            />
          </div>
          <div className="form-champ">
            <TextField
              id="activityCategory"
              placeholder={this.props.data.activityCategory}
              className="form-text"
              onBlur={this.setActivityCategory}
            />
          </div>
          <div className="form-champ">
            <TextField
              id="activityWebsite"
              placeholder={this.props.data.activityWebsite}
              className="form-text"
              onBlur={this.setActivityWebsite}
            />
          </div>
          <div className="form-validation">
            <RaisedButton className="form-button" label={this.props.data.creationLabel} primary={true} onTouchTap={this.handleSubmit}/>
            <ErrorText id="globalActivityCreationError" text={this.props.data.errorTextAllAreRequired} />
          </div>
        </form>
        <FRIP_Popup
          title={this.props.data.popupCreationActivityTitle}
          text={this.props.data.popupCreationActivityContent}
          buttonLabel={this.props.data.popupCreationActivityButtonLabel}
          ref="popupCreationActivity"
          accessToHomePage={this.props.accessToHomePage}
        />
      </div>
    );
  },
});

export {FRIP_FormConnexion, FRIP_FormInscription, FRIP_FormEventCreation, FRIP_FormActivityCreation};
