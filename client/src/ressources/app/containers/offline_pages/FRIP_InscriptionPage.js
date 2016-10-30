import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import {FRIP_FormInscription} from '../../components/FRIP_Form';

var FRIP_InscriptionPage = React.createClass({

  render: function() {
    return (
      <div className="form" id={this.props.id}>
        <FRIP_FormInscription
          text={this.props.data.form}
        />
        <RaisedButton className="form-button" label={this.props.data.buttonInscriptionLabel} primary={true} onTouchTap={this.props.connexion}/>
        <div className="link" onTouchTap={this.props.changePage}>{this.props.data.cancelLabel}</div>
      </div>
    );
  }
});

export default FRIP_InscriptionPage;
