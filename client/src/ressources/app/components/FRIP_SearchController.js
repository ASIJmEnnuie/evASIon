/*-------------------*/
/* Imports           */
/*-------------------*/

import React, {Component, PropTypes, Children} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Autosuggest from 'react-autosuggest';
import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import HardwareKeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import {FRIP_TextField, FRIP_DatePicker, FRIP_SelectField, FRIP_Slider, FRIP_TimePicker} from '../components/FRIP_SearchSelectors.js';


/*-------------------*/
/* Constants         */
/*-------------------*/

const iconStyle = {
  marginTop: "auto",
  marginBottom: "auto",
  width: "24px",
  height: "24px",
  padding: "0px",
};


/*-------------------*/
/* Useful functions  */
/*-------------------*/

const zerosBeforeNumbers = (n) => {
  if (n < 10){
    return "0"+n;
  }
  return n;
};


const formatDate = (dateReceived) => {
  let date = new Date(dateReceived);
  let day = zerosBeforeNumbers(date.getDate());
  let month = zerosBeforeNumbers(date.getMonth()+1);
  let year = date.getFullYear();
  return day + "/" + month + "/" + year;
};


const formatTime = (dateReceived) => {
  let date = new Date(dateReceived);
  let hours = zerosBeforeNumbers(date.getHours());
  let minutes = zerosBeforeNumbers(date.getMinutes());
  return hours + ":" + minutes;
}


const makeValuesToSend = (state) => {
  return {
    "name": state.name,
    "date": state.date,
    "categorie": state.categorie,
    "price": state.price,
    "place": state.place,
    "time": state.time,
    "tag": state.tag,
    "proximity": state.proximity,
  }
};


/*-------------------*/
/* Global component  */
/*-------------------*/

const FRIP_SearchController = React.createClass({
  getDefaultProps: function() {
    return {
      iconDeploySearchController: <HardwareKeyboardArrowDown/>,
      searchControllerClassName: "searchController",
    }
  },

  render: function() {
    return (
      <div className="globalController">
        <div className="deployController">
          <span>{this.props.deployText}</span>
          <IconButton
            onTouchTap={this.props.deploySearchController}
            iconStyle={iconStyle}
          >
            {this.props.iconDeploySearchController}
          </IconButton>
        </div>

        <div className={this.props.searchControllerClassName}>
          {this.props.children}
        </div>
      </div>
    )
  },
});


/*-------------------*/
/* Thibault's part   */
/*-------------------*/

const FRIP_EventSearchController = React.createClass({
  getInitialState: function() {
    return {
      valueCategorie: 0,
      valueTag: 0,
      name: "",
      date: "",
      categorie: "",
      price: 0,
      place: "",
      time: "",
      tag: "",
      proximity: 0
    }
  },

  onSelectorChange: function(event, content, controller) {
    switch (controller) {
      case "name":
        this.setState({"name": content});
        break;

      case "date":
        this.setState((prevState, props) => {
          let values = makeValuesToSend(prevState);
          values.date = formatDate(content);
          this.sendSelectorsValues(values);
          return {
            "date": values.date,
          }
        });
        break;

      case "categorie":
        this.setState((prevState, props) => {
          let values = makeValuesToSend(prevState);
          values.categorie = this.props.data.categorie.items[content];
          this.sendSelectorsValues(values);
          return {
            "valueCategorie": content,
            "categorie": this.props.data.categorie.items[content]
          }
        });
        break;

      case "price":
        this.setState({"price": content});
        break;

      case "place":
        this.setState({"place": content});
        break;

      case "time":
        this.setState((prevState, props) => {
          let values = makeValuesToSend(prevState);
          values.time = formatTime(content);
          this.sendSelectorsValues(values);
          return {
            "time": values.time,
          }
        });
        break;

      case "tag":
        this.setState((prevState, props) => {
          let values = makeValuesToSend(prevState);
          values.tag = this.props.data.tag.items[content];
          this.sendSelectorsValues(values);
          return {
            "valueTag": content,
            "tag": this.props.data.tag.items[content]
          }
        });
        break;

      case "proximity":
        this.setState({"proximity": content});
        break;
    }
  },

  sendSelectorsValues: function(values) {
    console.log(values);
    if (this.props.stompClient != null)
      this.props.stompClient.send("?", {}, JSON.stringify(values));
  },

  render: function() {
    return (
      <FRIP_SearchController
        deploySearchController={this.props.deploySearchController}
        iconDeploySearchController={this.props.iconDeploySearchController}
        searchControllerClassName={this.props.searchControllerClassName}
        deployText={this.props.data.search}
      >
        <FRIP_TextField
          hintText={this.props.data.name}
          onChange={(event, content) => this.onSelectorChange(event, content, "name")}
          onBlur={() => this.sendSelectorsValues(makeValuesToSend(this.state))}
        />

        <FRIP_DatePicker
          hintText={this.props.data.date}
          onChange={(event, content) => this.onSelectorChange(event, content, "date")}
        />

        <FRIP_SelectField
          floatingLabelText={this.props.data.categorie.name}
          items={this.props.data.categorie.items}
          value={this.state.valueCategorie}
          onChange={(event, content) => this.onSelectorChange(event, content, "categorie")}
        />

        <FRIP_Slider
          title={this.props.data.price.name}
          min={this.props.data.price.min}
          max={this.props.data.price.max}
          value={this.state.price}
          onChange={(event, content) => this.onSelectorChange(event, content, "price")}
          onDragStop={() => this.sendSelectorsValues(makeValuesToSend(this.state))}
        />

        <FRIP_TextField
          hintText={this.props.data.place}
          onChange={(event, content) => this.onSelectorChange(event, content, "place")}
          onBlur={() => this.sendSelectorsValues(makeValuesToSend(this.state))}
        />

        <FRIP_TimePicker
          hintText={this.props.data.time}
          onChange={(event, content) => this.onSelectorChange(event, content, "time")}
        />

        <FRIP_SelectField
          floatingLabelText={this.props.data.tag.name}
          items={this.props.data.tag.items}
          value={this.state.valueTag}
          onChange={(event, content) => this.onSelectorChange(event, content, "tag")}
        />

        <FRIP_Slider
          title={this.props.data.proximity.name}
          min={this.props.data.proximity.min}
          max={this.props.data.proximity.max}
          value={this.state.proximity}
          onChange={(event, content) => this.onSelectorChange(event, content, "proximity")}
          onDragStop={() => this.sendSelectorsValues(makeValuesToSend(this.state))}
        />
      </FRIP_SearchController>
    );
  }
});


const FRIP_ActivitySearchController = React.createClass({
  render: function() {
    return (
      <FRIP_SearchController
        deploySearchController={this.props.deploySearchController}
        iconDeploySearchController={this.props.iconDeploySearchController}
        searchControllerClassName={this.props.searchControllerClassName}
        deployText={this.props.data.search}
      >
        <FRIP_TextField
          hintText={this.props.data.name}
        />
      </FRIP_SearchController>
    );
  }
});


/*-------------------*/
/* Morganes's part   */
/*-------------------*/

const FRIP_SearchActivityLittleController = React.createClass({
  getInitialState: function(){
    return {
      value: "",
      suggestions: [],
      selected: false,
    }
  },

  withoutAccent: function(str){
    var accent = [
        /[\300-\306]/g, /[\340-\346]/g, // A, a
        /[\310-\313]/g, /[\350-\353]/g, // E, e
        /[\314-\317]/g, /[\354-\357]/g, // I, i
        /[\322-\330]/g, /[\362-\370]/g, // O, o
        /[\331-\334]/g, /[\371-\374]/g, // U, u
        /[\321]/g, /[\361]/g, // N, n
        /[\307]/g, /[\347]/g, // C, c
    ];
    var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];

    for(var i = 0; i < accent.length; i++){
        str = str.replace(accent[i], noaccent[i]);
    }

    return str;
  },

  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions: function(value) {
    // TODO récupérer liste activités dans BD, suivre notation de activities.json, puis le supprimer
    const activities = require("../../data/activities.json").activities;
    const inputValue = this.withoutAccent(value.trim().toLowerCase());
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : activities.filter(activite =>
      this.withoutAccent(activite.name.toLowerCase()).slice(0, inputLength) === inputValue
    );
  },

  // When suggestion is clicked, Autosuggest needs to populate the input element
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue: function(suggestion) {
    return suggestion.name;
  },

  // Use your imagination to render suggestions.
  renderSuggestion: function(suggestion) {
    return (
    <div>
      <Avatar className="searchAvatar" size={25} src={suggestion.image} />
      {suggestion.name}
    </div>
    );
  },

  onChange: function(event, { newValue }) {
    this.setState({
      value: newValue
    });
    // TODO
    // if (newValue existe dans les activités existantes) {
      this.setState({
        selected: true
      });
    // }
  },

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested: function({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  },

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested: function() {
    this.setState({
      suggestions: []
    });
  },

  render: function() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: this.props.data.activitySearch,
      value,
      onChange: this.onChange
    };


    return (
      <div className="searchLittleController">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    )
  },
});


/*-------------------*/
/* Exports           */
/*-------------------*/
export {FRIP_EventSearchController, FRIP_ActivitySearchController, FRIP_SearchActivityLittleController};
