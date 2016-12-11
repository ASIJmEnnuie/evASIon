import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const FRIP_Event = React.createClass({
  registration: function() {
    console.log("UserId:" + this.props.userId);
    console.log("EventId:" + this.props.data.id);
  },

  render: function() {
    return (
      <section className="event">
        <div className="content">
          <div className="colImage" >
            <img src={this.props.data.image} alt="Une image de description"></img>
          </div>

          <div className="colInfo">
            <div className="col">
              <div className="row">
                <span className="title">{this.props.data.name}</span>
              </div>
              <div className="row">
                <span>Le {this.props.data.date} à {this.props.data.time}</span>
              </div>
              <div className="row">
                <span>{this.props.data.place}</span>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <span><span className="digit">{this.props.data.registrations}</span> personne(s) inscrites</span>
              </div>
              <div className="row">
                <span><span className="digit">{this.props.data.size - this.props.data.registrations}</span> place(s) restantes</span>
              </div>
            </div>

            <div className="row">
              <span>{this.props.data.description}</span>
            </div>
          </div>

          <div className="row">
            <RaisedButton
              label={this.props.registration}
              primary={true}
              onTouchTap={this.registration}
            />
          </div>
        </div>
      </section>
    );
  }
});

export default FRIP_Event;
