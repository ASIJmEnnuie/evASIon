import React from 'react';
import FRIP_Event from '../components/FRIP_Event';

const FRIP_EventList = React.createClass({
  getDefaultProps: function() {
    return {
      events: [],
    }
  },

  render: function() {
    return (
      <div className="eventList">
      {
        this.props.events.map(function(event, i){
          return(
            <FRIP_Event
              key={i}
              nom={event.nom}
              lieu={event.lieu}
              organisateur={event.organisateur}
              date={event.date}
              heure={event.heure}
              description={event.description}
              nbInscriptions={event.nb_inscriptions}
              nbPlaces={event.nb_places}
              image={event.image}
            />
          );
        })
      }
      </div>
    );
  }
});

export default FRIP_EventList;
