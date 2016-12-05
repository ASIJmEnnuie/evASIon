import React from "react";
import FRIP_SearchPage from "../../components/FRIP_SearchPage.js";

const FRIP_ActivityPage = React.createClass({
  render: function() {
    let activities = require("../../../data/activities.json").events;
    return (
      <FRIP_SearchPage
        page="activity"
        id={this.props.id}
        data={this.props.data}
        content={activities}
      />
    );
  }
});

export default FRIP_ActivityPage;
