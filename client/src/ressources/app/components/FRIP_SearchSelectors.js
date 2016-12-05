import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Slider from 'material-ui/Slider';
import SelectField from 'material-ui/SelectField';

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
  render: function() {
    return (
      <div>SelectField</div>
    );
  }
});

const FRIP_Slider = React.createClass({
  render: function() {
    return (
      <div>Slider</div>
    );
  }
});

const FRIP_TimePicker = React.createClass({
  render: function() {
    return (
      <div>TimePicker</div>
    );
  }
});

export {FRIP_TextField, FRIP_DatePicker, FRIP_SelectField, FRIP_Slider, FRIP_TimePicker};
