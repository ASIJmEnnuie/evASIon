import React from 'react';
import {FRIP_EventSearchController, FRIP_ActivitiesSearchController} from './FRIP_SearchController';
import FRIP_EventList from './FRIP_EventList';

import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import HardwareKeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';

const FRIP_SearchPage = React.createClass({
  getInitialState: function() {
    return {
      isSearchControllerDeployed: false,
      iconDeploySearchController: <HardwareKeyboardArrowDown/>,
      searchControllerClassName: "searchControllerReduced",
      contentListClassName: "contentListDeployed",
    }
  },

  deploySearchController: function() {
    if (this.state.isSearchControllerDeployed) {
      this.setState({
        isSearchControllerDeployed: false,
        iconDeploySearchController: <HardwareKeyboardArrowDown/>,
        searchControllerClassName: "searchControllerReduced",
        contentListClassName: "contentListDeployed",
      });
    } else {
      this.setState({
        isSearchControllerDeployed: true,
        iconDeploySearchController: <HardwareKeyboardArrowUp/>,
        searchControllerClassName: "searchControllerDeployed",
        contentListClassName: "contentListReduced",
      });
    }
  },

  render: function() {
    let page = (<div></div>);
    if (this.props.page === "activity") {
      page = (
        <div id="contentPage">
          <FRIP_ActivitySearchController
            data={this.props.data.searchController}
            deploySearchController={this.deploySearchController}
            iconDeploySearchController={this.state.iconDeploySearchController}
            searchControllerClassName={this.state.searchControllerClassName}
          />
          <FRIP_EventList
            activities={this.props.content}
            eventListClassName={this.state.contentListClassName}
          />
        </div>
      );
    } else if (this.props.page === "event") {
      page = (
        <div id="contentPage">
          <FRIP_EventSearchController
            data={this.props.data.searchController}
            deploySearchController={this.deploySearchController}
            iconDeploySearchController={this.state.iconDeploySearchController}
            searchControllerClassName={this.state.searchControllerClassName}
          />
          <FRIP_EventList
            events={this.props.content}
            eventListClassName={this.state.contentListClassName}
          />
        </div>
      );
    }

    return (
      <div id={this.props.id}>
        {page}
      </div>
    );
  }
});

export default FRIP_SearchPage;
