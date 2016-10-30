import React from 'react';

import {FRIP_NavbarOffline} from '../components/FRIP_Navbar';
import FRIP_HomeOfflinePage from './offline_pages/FRIP_HomeOfflinePage';
import FRIP_InscriptionPage from './offline_pages/FRIP_InscriptionPage';

var FRIP_OfflineContainer = React.createClass({
  getInitialState: function() {
    return {
      page: 0,
    }
  },

  changePage: function() {
    if (this.state.page == 0) {
        this.setState({page: 1});
    }
    if (this.state.page == 1) {
        this.setState({page: 0});
    }
  },

  render: function() {
    var page = null;
    switch (this.state.page) {
      case 0:
        page = (<FRIP_HomeOfflinePage id="homeOfflinePage" data={this.props.data} connexion={this.props.connexion} changePage={this.changePage}/>);
        break;
      case 1:
        page = (<FRIP_InscriptionPage id="inscriptionPage" data={this.props.data} connexion={this.props.connexion} changePage={this.changePage}/>);
        break;
      default:
        page = (<FRIP_HomeOfflinePage id="homeOfflinePage" data={this.props.data} connexion={this.props.connexion} changePage={this.changePage}/>);
    }
    return (
      <div>
        <FRIP_NavbarOffline
          text={this.props.data.navbar}
        />
        {page}
      </div>
    );
  }
});

export default FRIP_OfflineContainer;
