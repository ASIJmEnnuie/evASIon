import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Slider from 'material-ui/Slider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import RaisedButton from 'material-ui/RaisedButton';

const FRIP_SearchController = React.createClass({
  getInitialState: function(){
    return {
      value: 1,
    }
  },

  handleChange: function (event, index, value) {
    this.setState({value});
  },

  render: function() {
    return (
      <div className="searchController">
        <div className="searchSelector">
          <TextField
            hintText="Nom"
            onChange={this.props.nameController}
          />
        </div>

        <div className="searchSelector">
          <TextField
            hintText="Lieu"
            onChange={this.props.placeController}
          />
        </div>

        <div className="searchSelector">
          <DatePicker
            hintText="Date"
            onChange={this.props.dateController}
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
          <div className="text">Prix</div>
          <Slider className="slider"/>
        </div>

        <div className="searchSelector">
          <div className="text">Proximité</div>
          <Slider className="slider"/>
        </div>
      </div>
    )
  },
});

export default FRIP_SearchController;
