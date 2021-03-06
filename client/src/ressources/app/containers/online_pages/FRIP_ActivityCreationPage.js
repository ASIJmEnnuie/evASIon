import React from 'react';
import {FRIP_FormActivityCreation} from '../../components/FRIP_Form';

const FRIP_ActivityCreationPage = React.createClass({
  render: function() {
    return (
      <div id={this.props.id}>
        <div id="activityCreationPage" className="form">
          <FRIP_FormActivityCreation
            data={this.props.data}
            accessToHomePage={this.props.accessToHomePage}
            stompClient={this.props.stompClient}
          />
        </div>
      </div>
    );
  }
});

export default FRIP_ActivityCreationPage;
