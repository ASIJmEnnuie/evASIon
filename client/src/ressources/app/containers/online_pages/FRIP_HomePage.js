import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {FRIP_Carousel} from '../../components/FRIP_Carousel';

const colors = require('../../../data/colors.json').colors;

const FRIP_HomePage = React.createClass({
  getDefaultProps: function() {
    return {
      eventList: ["Une sortie au musée des beaux arts?", "Un cours de cuisine?", "Une sortie cinéma?"],
      categorieList: ["Sport", "Concerts", "Cinéma", "Visites"]
    }
  },

  render: function() {
    var eventSlides = (<div className="slide-event"></div>);
    var categorieSlides = (<div className="slide-categorie"></div>);

    if (this.props.eventList.length > 0) {
      eventSlides = this.props.eventList.map(function(event, i){
        return (
          <div
            key={"slide-event"+i}
            className="slide-event"
            style={{backgroundColor: colors[parseInt(Math.random()*colors.length)]}}
          >
            <div> {event} </div>
          </div>
        );
      });
    }

    if (this.props.categorieList.length > 0) {
      categorieSlides = this.props.categorieList.map(function(categorie, i){
        return (
          <div
            key={"slide-categorie"+i}
            className="slide-categorie"
            style={{backgroundColor: colors[parseInt(Math.random()*colors.length)]}}
          >
            <div> {categorie} </div>
          </div>
        );
      });
    }

    return (
      <div id={this.props.id}>
        <div id="homeOnlinePage">
          <FRIP_Carousel>
            {eventSlides}
          </FRIP_Carousel>
          <div id="homeOnlineText">
            <button id="buttonEventAccess"> Autres Evenements </button>
          </div>
          <FRIP_Carousel>
            {categorieSlides}
          </FRIP_Carousel>
        </div>
      </div>
    );
  }
});

export default FRIP_HomePage;
