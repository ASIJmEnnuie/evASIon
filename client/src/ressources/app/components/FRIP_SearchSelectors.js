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
          onBlur={this.props.onBlur}
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
  getDefaultProps: function() {
    return {
      value: 0,
    }
  },

  render: function() {
    return (
      <div className="searchSelector">
        <SelectField
          className="select"
          floatingLabelText={this.props.floatingLabelText}
          value={this.props.value}
          onChange={this.props.onChange}
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
          <span className="title">
            {this.props.title}
          </span>
          <span className="value">
            {this.props.value}
          </span>
        </div>
        <Slider
          className="slider"
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          onChange={this.props.onChange}
          onDragStop={this.props.onDragStop}
          disabled={this.props.disabled}
        />
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
