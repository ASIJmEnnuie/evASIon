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
      <div className={this.props.eventListClassName}>
      {
        this.props.events.map((event, i) => {
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
              registration={this.props.data.registration}
              stompClient={this.props.stompClient}
              userId={this.props.userId}
            />
          );
        })
      }
      </div>
    );
  }
});


const FRIP_ActivityList = React.createClass({
  render: function() {
    return (
      <div className={this.props.activityListClassName}>
        <div>Liste activités</div>
        {
          this.props.activities.map((activity, i) => {
            return(
              <div key={"activity"+i}> {JSON.stringify(activity)} </div>
            );
          })
        }
      </div>
    );
  }
})

export {FRIP_EventList, FRIP_ActivityList};
