import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {FRIP_CarouselOffline} from '../../components/FRIP_Carousel';
import {FRIP_FormConnexion} from '../../components/FRIP_Form';

const FRIP_HomeOfflinePage = React.createClass({

  render: function() {
    return (
      <div id={this.props.id}>
        <div id="carousel">
          <FRIP_CarouselOffline
            id="carousselOffline"
            pictureList={this.props.data.carousel.pictureList}
            namePicture={this.props.data.carousel.namePicture}
          />
        </div>
        <div className="form">
          <FRIP_FormConnexion
            connexion={this.props.connexion}
            text={this.props.data.form}
          />
          <RaisedButton className="form-button" label={this.props.data.buttonConnexionLabel} primary={true} onTouchTap={this.props.connexion}/>
          <div className="link" onTouchTap={this.props.changePage}>{this.props.data.linkInscriptionLabel}</div>
        </div>
      </div>
    );
  }
});

export default FRIP_HomeOfflinePage;
