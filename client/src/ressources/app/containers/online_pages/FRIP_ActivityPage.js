import React from "react";
import FRIP_SearchPage from "../../components/FRIP_SearchPage.js";

const FRIP_ActivityPage = React.createClass({
  render: function() {
    return (
      <FRIP_SearchPage
        page="activity"
        id={this.props.id}
        data={this.props.data}
        content={this.props.activityList}
        stompClient={this.props.stompClient}
      />
    );
  }
});

export default FRIP_ActivityPage;
