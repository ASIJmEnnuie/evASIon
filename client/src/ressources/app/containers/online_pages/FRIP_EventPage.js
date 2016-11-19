import React from 'react';
import FRIP_SearchController from '../../components/FRIP_SearchController';
import FRIP_EventList from '../../components/FRIP_EventList';

const FRIP_EventPage = React.createClass({
  render: function() {
    var events = require("../../../data/events.json").events;
    return (
      <div id={this.props.id}>
        <div id="eventPage">
          <FRIP_SearchController
            id="eventPage"
            data={this.props.data.searchController}
          />
          <FRIP_EventList events={events}/>
        </div>
      </div>
    );
  }
});

export default FRIP_EventPage;
