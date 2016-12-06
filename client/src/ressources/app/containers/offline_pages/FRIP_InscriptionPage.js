import React from 'react';

import {FRIP_FormInscription} from '../../components/FRIP_Form';

const FRIP_InscriptionPage = React.createClass({

  render: function() {
    return (
      <div
        className="form"
        id={this.props.id}
      >
        <FRIP_FormInscription
          data={this.props.data.form}
          connexion={this.props.connexion}
        />
        <div className="link" onTouchTap={this.props.changePage}> {this.props.data.cancelLabel} </div>
      </div>
    );
  }
});

export default FRIP_InscriptionPage;
