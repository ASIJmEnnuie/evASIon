import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import {FRIP_Carousel} from '../../components/FRIP_Carousel';

const parameters = require('../../../data/parameters');
const iconStyle = {
  height:"100px",
  width:"100px",
  padding:"0px",
  color:parameters.secondaryColor2
}
const styleHomeOnlineButton = {
  height:"100px",
  width:"100px",
  padding:"0px",
  margin:"auto",
  boxShadow:"0px 0px 10px 2px " + parameters.gray,
  borderRadius:"100px",
  backgroundColor: parameters.gray
}
const styleSlideCarousel = {
  backgroundColor: parameters.secondaryColor
}



const FRIP_HomePage = React.createClass({
  getDefaultProps: function() {
    return {
      eventList: ["Une sortie au musée des beaux arts?", "Un cours de cuisine?", "Une sortie cinéma?", "Un cours de danse?"],
      categorieList: ["Sport", "Concerts", "Cinéma", "Visites"]
    }
  },

  render: function() {
    var eventSlides = (<div className="slide-event"></div>);
    var categorieSlides = (<div className="slide-categorie"></div>);
    var nbSlidesToShow = 3;
    if (this.props.screenWidth <= 900) {
      nbSlidesToShow = 1;
    }

    if (this.props.eventList.length > 0) {
      eventSlides = this.props.eventList.map(function(event, i){
        return (
          <div
            key={"slide-event"+i}
            className="slide-event"
            style={styleSlideCarousel}
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
            style={styleSlideCarousel}
          >
            <div> {categorie} </div>
          </div>
        );
      });
    }

    return (
      <div id={this.props.id}>
        <div id="homeOnlinePage">
          <FRIP_Carousel
            slidesToShow={nbSlidesToShow}
          >
            {eventSlides}
          </FRIP_Carousel>

          <div id="homeOnlineButtons">
            <IconButton
              style={styleHomeOnlineButton}
              iconStyle={iconStyle}
            >
              <ContentAddCircle/>
            </IconButton>
          </div>

          <FRIP_Carousel
            slidesToShow={nbSlidesToShow}
          >
            {categorieSlides}
          </FRIP_Carousel>
        </div>
      </div>
    );
  }
});

export default FRIP_HomePage;
