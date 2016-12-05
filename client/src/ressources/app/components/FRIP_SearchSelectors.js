import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Slider from 'material-ui/Slider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const FRIP_TextField = React.createClass({
  render: function() {
    return (
      <div className="searchSelector">
        <TextField
          hintText={this.props.hintText}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
});

const FRIP_DatePicker = React.createClass({
  render: function() {
    return (
      <div className="searchSelector">
        <DatePicker
          hintText={this.props.hintText}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
});

const FRIP_SelectField = React.createClass({
  getInitialState: function() {
    return {
      value: 0,
    }
  },

  changeItem: function(event, index, value) {
    this.setState({value});
  },

  render: function() {
    return (
      <div className="searchSelector">
        <SelectField
          floatingLabelText={this.props.floatingLabelText}
          value={this.state.value}
          onChange={this.changeItem}
          className="select"
        >
          {
            this.props.items.map(function(item, i) {
              return (
                <MenuItem
                  value={i}
                  primaryText={item}
                  key={"searchSelectorCategorie" + i}
                />
              );
            })
          }
        </SelectField>
      </div>
    );
  }
});

const FRIP_Slider = React.createClass({
  render: function() {
    return (
      <div className="searchSelector">
        <div className="text">
          {this.props.title}
        </div>
        <Slider className="slider"/>
      </div>
    );
  }
});

const FRIP_TimePicker = React.createClass({
  render: function() {
    return (
      <div className="searchSelector">
        <TimePicker
          hintText={this.props.hintText}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
});

export {FRIP_TextField, FRIP_DatePicker, FRIP_SelectField, FRIP_Slider, FRIP_TimePicker};
