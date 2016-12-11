import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const FRIP_Event = React.createClass({
  render: function() {
    return (
      <section className="event">
        <div className="content">
          <div className="colImage" >
            <img src={this.props.image} alt="Une image de description"></img>
          </div>

          <div className="colInfo">
            <div className="col">
              <div className="row">
                <span className="title">{this.props.nom}</span>
              </div>
              <div className="row">
                <span>Le {this.props.date} à {this.props.heure}</span>
              </div>
              <div className="row">
                <span>{this.props.lieu}</span>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <span><span className="digit">{this.props.nbInscriptions}</span> personne(s) inscrites</span>
              </div>
              <div className="row">
                <span><span className="digit">{this.props.nbPlaces - this.props.nbInscriptions}</span> place(s) restantes</span>
              </div>
            </div>

            <div className="row">
              <span>{this.props.description}</span>
            </div>
          </div>

          <div className="row">
            <RaisedButton label="Inscription" primary={true} />
          </div>
        </div>
      </section>
    );
  }
});

export default FRIP_Event;
