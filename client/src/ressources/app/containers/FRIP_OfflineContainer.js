import React from 'react';
import {FRIP_NavbarOffline} from '../components/FRIP_Navbar';
import {FRIP_CarouselOffline} from '../components/FRIP_Carousel';
import {FRIP_FormConnection} from '../components/FRIP_Form';

const FRIP_OfflineContainer = React.createClass({
  render: function() {
    return (
      <div>
        <FRIP_NavbarOffline
          text={this.props.data.navbar}
        />
        <div id="homeOfflinePage">
          <div id="carousel">
            <FRIP_CarouselOffline
              id="carousselOffline"
              pictureList={this.props.data.carousel.pictureList}
              namePicture={this.props.data.carousel.namePicture}
            />
          </div>
          <div id="formulaire">
            <FRIP_FormConnection
              connexion={this.props.connexion}
              text={this.props.data.formulaire}
            />
          </div>
        </div>
      </div>
    );
  }
});

export default FRIP_OfflineContainer;
