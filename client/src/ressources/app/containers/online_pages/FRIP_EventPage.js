import React from "react";
import FRIP_SearchPage from "../../components/FRIP_SearchPage.js";

const FRIP_EventPage = React.createClass({
  render: function() {
    let events = require("../../../data/events.json").events;
    return (
      <FRIP_SearchPage
        id={this.props.id}
        data={this.props.data}
        content={events}
        page="event"
      />
    );
  }
});

export default FRIP_EventPage;
