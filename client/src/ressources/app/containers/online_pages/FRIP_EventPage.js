import React from "react";
import FRIP_SearchPage from "../../components/FRIP_SearchPage.js";

const FRIP_EventPage = React.createClass({
  render: function() {
    let events = require("../../../data/events.json").events;
    return (
      <FRIP_SearchPage
        data={this.props.data}
        content={events}
        page="event"
        id={this.props.id}
      />
    );
  }
});

export default FRIP_EventPage;
