import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Slider from 'material-ui/Slider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import HardwareKeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';

import RaisedButton from 'material-ui/RaisedButton';

const FRIP_SearchController = React.createClass({
  getInitialState: function(){
    return {
      value: 1,
      isDeploy: false,
      renderIconDeploy: <HardwareKeyboardArrowDown/>
    }
  },

  handleChange: function (event, index, value) {
    this.setState({value});
    console.log(this.state.value);
  },

  deploySearchBar: function(e) {
    if (this.state.isDeploy == false) {
      this.setState({
        isDeploy: true,
        renderIconDeploy: <HardwareKeyboardArrowUp/>
      });
    }
    else {
      this.setState({
        isDeploy: false,
        renderIconDeploy: <HardwareKeyboardArrowDown/>
      });
    }
  },

  render: function() {
    return (
      <div className="searchController">
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

        <div className="deploy">
          <span>{this.props.data.search}</span>
          <IconButton
            id="iconDeploy"
            onTouchTap={this.deploySearchBar}
          >
            {this.state.renderIconDeploy}
          </IconButton>
        </div>
      </div>
    )
  },
});

export default FRIP_SearchController;
