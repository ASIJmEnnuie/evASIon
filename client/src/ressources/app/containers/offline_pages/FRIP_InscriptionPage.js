import React from 'react';

import {FRIP_FormInscription} from '../../components/FRIP_Form';

const FRIP_InscriptionPage = React.createClass({

  render: function() {
    return (
      <div id={this.props.id}>
        <div className="form">
          <FRIP_FormInscription
            data={this.props.data.form}
            stompClient={this.props.stompClient}
          />
          <div
            className="link"
            onTouchTap={this.props.changePage}
          >
            {this.props.data.cancelLabel}
          </div>
        </div>
      </div>
    );
  }
});

export default FRIP_InscriptionPage;
