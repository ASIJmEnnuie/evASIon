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
const iconStyle = {
  marginTop: "auto",
  marginBottom: "auto",
  width: "24px",
  height: "24px",
  padding: "0px",
};

const FRIP_SearchController = React.createClass({
  getInitialState: function() {
    return {
      value: 1,
    }
  },

  getDefaultProps: function() {
    return {
      iconDeploySearchController: <HardwareKeyboardArrowDown/>,
      searchControllerClassName: "searchController",
    }
  },

  handleChange: function(event, index, value) {
    this.setState({value});
  },

  render: function() {
    return (
      <div className="globalController">
        <div className="deployController">
          <span>{this.props.data.search}</span>
          <IconButton
            onTouchTap={this.props.deploySearchController}
            iconStyle={iconStyle}
          >
            {this.props.iconDeploySearchController}
          </IconButton>
        </div>
        <div className={this.props.searchControllerClassName}>
          <div className="searchSelector">
            <TextField
              hintText={this.props.data.name}
              onChange={this.props.nameController}
            />
          </div>

          <div className="searchSelector">
            <DatePicker
              hintText={this.props.data.date}
              onChange={this.props.data.dateController}
            />
          </div>

          <div className="searchSelector">
            <SelectField
              floatingLabelText={this.props.data.categorie.name}
              value={this.state.value}
              onChange={this.handleChange}
              className="select"
            >
              {
                this.props.data.categorie.items.map(function(item, i) {
                  return (
                    <MenuItem value={i} primaryText={item} key={"searchSelectorCategorie"+i}/>
                  );
                })
              }
            </SelectField>
          </div>

          <div className="searchSelector">
            <div className="text">{this.props.data.price}</div>
            <Slider className="slider"/>
          </div>

          <div className="searchSelector">
            <TextField
              hintText={this.props.data.place}
              onChange={this.props.placeController}
            />
          </div>

          <div className="searchSelector">
            <TimePicker
              hintText={this.props.data.time}
              onChange={this.props.timeController}
            />
          </div>

          <div className="searchSelector">
            <SelectField
              floatingLabelText={this.props.data.tag.name}
              value={this.state.value}
              onChange={this.handleChange}
              className="select"
            >
              {
                this.props.data.tag.items.map(function(item, i) {
                  return (
                    <MenuItem value={i} primaryText={item} key={"searchSelectorTag"+i}/>
                  );
                })
              }
            </SelectField>
          </div>

          <div className="searchSelector">
            <div className="text">{this.props.data.proximity}</div>
            <Slider className="slider"/>
          </div>
        </div>
      </div>
    )
  },
});

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


export {FRIP_SearchController, FRIP_SearchActivityLittleController};
