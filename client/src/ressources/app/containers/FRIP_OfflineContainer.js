import React from 'react';

import {FRIP_NavbarOffline} from '../components/FRIP_Navbar';
import FRIP_HomeOfflinePage from './offline_pages/FRIP_HomeOfflinePage';
import FRIP_InscriptionPage from './offline_pages/FRIP_InscriptionPage';

var FRIP_OfflineContainer = React.createClass({
  getInitialState: function() {
    return {
      page: 0,
      pageId: "homeOfflinePage"
    }
  },

  changePage: function() {
    switch (this.state.page) {
      case 0:
        this.setState({page: 1});
        this.setState({pageId: "inscriptionPage"});
        break;
      case 1:
        this.setState({page: 0});
        this.setState({pageId: "homeOfflinePage"});
        break;
      default:
        this.setState({page: 0});
        this.setState({pageId: "homeOfflinePage"});
    }
  },

  render: function() {
    var page = null;
    switch (this.state.page) {
      case 0:
        page = (
          <FRIP_HomeOfflinePage
            id={this.state.pageId}
            data={this.props.data}
            changePage={this.changePage}
            stompClient={this.props.stompClient}
          />);
        break;
      case 1:
        page = (
          <FRIP_InscriptionPage
            id={this.state.pageId}
            data={this.props.data}
            changePage={this.changePage}
            stompClient={this.props.stompClient}
          />);
        break;
      default:
        page = (
          <FRIP_HomeOfflinePage
            id={this.state.pageId}
            data={this.props.data}
            changePage={this.changePage}
            stompClient={this.props.stompClient}
          />);
    }
    return (
      <div>
        <FRIP_NavbarOffline
          data={this.props.data.navbar}
        />
        {page}
      </div>
    );
  }
});

export default FRIP_OfflineContainer;
