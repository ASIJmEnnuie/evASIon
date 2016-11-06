import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

const FRIP_SearchController = React.createClass({
  render: function() {
    return (
      <div className="searchController">
        <div className="searchSelector">
          <DatePicker
            hintText="Choisir une date"
            onChange={this.props.dateController}/>
        </div>
        <div className="searchSelector" onChange={this.props.placeController}>
          <TextField  hintText="Saisir un emplacement" />
        </div>
        <div className="searchSelector" onTouchTap={this.props.razController}>
          <RaisedButton label="Afficher tous les évènements" />
        </div>
      </div>
    )
  },
});

export default FRIP_SearchController;
