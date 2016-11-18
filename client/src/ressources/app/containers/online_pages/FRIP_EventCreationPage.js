import React from 'react';

import {FRIP_FormEventCreation} from '../../components/FRIP_Form';

const FRIP_EventCreationPage = React.createClass({
  render: function() {
    return (
      <div id={this.props.id}>
        <div className="form" id="eventCreationPage">
          <FRIP_FormEventCreation
            text={this.props.text}
            label={this.props.text.buttonEventCreationLabel}
            //eventCreation={this.props.eventCreation}
          />
          <div className="link" >{this.props.text.cancelLabel}</div>
        </div>
      </div>
    );
  }
});

export default FRIP_EventCreationPage;
