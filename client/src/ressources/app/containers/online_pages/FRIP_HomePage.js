import React from 'react';
import {FRIP_Carousel} from '../../components/FRIP_Carousel';

const FRIP_HomePage = React.createClass({
  getDefaultProps: function() {
    return {
      eventList: [1,2,3,4,5,6],
    }
  },

  render: function() {
    var slides = (<div className="slideEvent"></div>);

    if (this.props.eventList.length > 0)
      slides = this.props.eventList.map(function(event, i){
        return (
          <div key={"slideEvent"+i} className="slideEvent"> {event} </div>
        );
      });

    return (
      <div id={this.props.id}>
        <div id="homeOnlinePage">
          <FRIP_Carousel>
            {slides}
          </FRIP_Carousel>
          <div id="homeOnlineText">
            <h1>Autres Evenements</h1>
          </div>
          <FRIP_Carousel>
            {slides}
          </FRIP_Carousel>
        </div>
      </div>
    );
  }
});

export default FRIP_HomePage;
