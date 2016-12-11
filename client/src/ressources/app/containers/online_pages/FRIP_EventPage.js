import React from "react";
import FRIP_SearchPage from "../../components/FRIP_SearchPage.js";

const FRIP_EventPage = React.createClass({
  render: function() {
    return (
      <FRIP_SearchPage
        id={this.props.id}
        data={this.props.data}
        content={this.props.eventList}
        page="event"
        stompClient={this.props.stompClient}
      />
    );
  }
});

export default FRIP_EventPage;
