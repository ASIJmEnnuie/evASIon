import React, {Component, PropTypes, Children} from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Slider from 'material-ui/Slider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import AutoComplete from 'material-ui/AutoComplete';
import Autosuggest from 'react-autosuggest';

import Avatar from 'material-ui/Avatar';

import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import HardwareKeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';

import RaisedButton from 'material-ui/RaisedButton';

const FRIP_SearchController = React.createClass({
  getInitialState: function(){
    return {
      value: 1,
      deploy: false,
      idIconDeploy: "iconDeploy"
    }
  },

  handleChange: function (event, index, value) {
    this.setState({value});
  },

  deploySearchBar: function() {

  },

  render: function() {
    return (
      <div className="searchController">
        <div className="princalControl" >
          <div className="searchSelector">
            <TextField
              hintText="Nom"
              onChange={this.props.nameController}
            />
          </div>

          <div className="searchSelector">
            <DatePicker
              hintText="Date"
              onChange={this.props.dateController}
            />
          </div>

          <div className="searchSelector">
            <SelectField
              floatingLabelText="Catégorie"
              value={this.state.value}
              onChange={this.handleChange}
              className="select"
            >
              <MenuItem value={1} primaryText="Never" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField>
          </div>

          <div className="searchSelector">
            <div className="text">Prix</div>
            <Slider className="slider"/>
          </div>
        </div>

        <div className="secondaryController">
          <div className="searchSelector">
            <TextField
              hintText="Lieu"
              onChange={this.props.placeController}
            />
          </div>

          <div className="searchSelector">
            <TimePicker
              hintText="Heure début"
              onChange={this.props.timeController}
            />
          </div>

          <div className="searchSelector">
            <SelectField
              floatingLabelText="Tags"
              value={this.state.value}
              onChange={this.handleChange}
              className="select"
            >
              <MenuItem value={1} primaryText="Never" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField>
          </div>

          <div className="searchSelector">
            <div className="text">Proximité</div>
            <Slider className="slider"/>
          </div>
        </div>

        <IconButton
          id={this.state.idIconDeploy}
          onTouchTap={this.deploySearchBar}
        >
          <HardwareKeyboardArrowDown />
        </IconButton>
      </div>
    )
  },
});

const FRIP_SearchActivityLittleController = React.createClass({
  getInitialState: function(){
    return {
      value: "",
      suggestions: [],
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


export {FRIP_SearchController, FRIP_SearchActivityLittleController};
