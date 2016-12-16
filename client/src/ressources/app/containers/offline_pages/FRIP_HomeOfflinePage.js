import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {FRIP_CarouselOffline} from '../../components/FRIP_Carousel';
import {FRIP_FormConnexion} from '../../components/FRIP_Form';

const FRIP_HomeOfflinePage = React.createClass({

  render: function() {
    return (
      <div id={this.props.id}>
        <div className="form">
          <FRIP_FormConnexion
            data={this.props.data.form}
            stompClient={this.props.stompClient}
          />
          <div className="link" onTouchTap={this.props.changePage}>{this.props.data.linkInscriptionLabel}</div>
        </div>
        <div className="carousel">
          <FRIP_CarouselOffline
            id="carousselOffline"
            pictureList={this.props.data.carousel.pictureList}
            namePicture={this.props.data.carousel.namePicture}
          />
        </div>
      </div>
    );
  }
});

export default FRIP_HomeOfflinePage;
