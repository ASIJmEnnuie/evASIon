import React from 'react';
import {FRIP_EventsSearchController} from '../../components/FRIP_SearchController';
import FRIP_EventList from '../../components/FRIP_EventList';

import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import HardwareKeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';

const FRIP_EventPage = React.createClass({
  getInitialState: function() {
    return {
      isSearchControllerDeployed: false,
      iconDeploySearchController: <HardwareKeyboardArrowDown/>,
      searchControllerClassName: "searchControllerReduced",
      eventListClassName: "eventListDeployed",
    }
  },

  deploySearchController: function() {
    if (this.state.isSearchControllerDeployed) {
      this.setState({
        isSearchControllerDeployed: false,
        iconDeploySearchController: <HardwareKeyboardArrowDown/>,
        searchControllerClassName: "searchControllerReduced",
        eventListClassName: "eventListDeployed",
      });
    } else {
      this.setState({
        isSearchControllerDeployed: true,
        iconDeploySearchController: <HardwareKeyboardArrowUp/>,
        searchControllerClassName: "searchControllerDeployed",
        eventListClassName: "eventListReduced",
      });
    }
  },

  render: function() {
    let events = require("../../../data/events.json").events;
    return (
      <div id={this.props.id}>
        <div id="eventPage">
          <FRIP_EventsSearchController
            data={this.props.data.searchController}
            deploySearchController={this.deploySearchController}
            iconDeploySearchController={this.state.iconDeploySearchController}
            searchControllerClassName={this.state.searchControllerClassName}
          />
          <FRIP_EventList
            events={events}
            eventListClassName={this.state.eventListClassName}
          />
        </div>
      </div>
    );
  }
});

export default FRIP_EventPage;
