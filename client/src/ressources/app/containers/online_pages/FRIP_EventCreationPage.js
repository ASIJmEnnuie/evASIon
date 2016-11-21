import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import {FRIP_FormEventCreation} from '../../components/FRIP_Form';

const FRIP_EventCreationPage = React.createClass({
  getInitialState: function() {
    return {
      finished: false,
      stepIndex: 0,
    }
  },

  handleNext: function() {
    const {stepIndex} = this.state;

    if (this.state.stepIndex == 1) {
      if (this.handleSubmit()) {
        this.setState({
          stepIndex: stepIndex + 1,
          finished: stepIndex >= 1,
        });
      }
    }
    else {
      this.setState({
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 1,
      });
    }
  },

  handlePrev: function() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  },

  handleSubmit: function() {
    if (!this.refs.formEvent.state.eventName.trim() || !(this.refs.formEvent.state.eventDate) || !(this.refs.formEvent.state.eventTime) ) {
      var obj = document.getElementById("globalEventCreationError");
      obj.style.display='block';
      return false;
    }
    else {
      // envoie à la BD pour control
      // si control valide, alors :
      //this.props.eventCreation();
      console.log("evénement créé");
      console.log("eventName : "+this.refs.formEvent.state.eventName);
      console.log("eventPlace : "+this.refs.formEvent.state.eventPlace);
      console.log("eventMeetingPlace : "+this.refs.formEvent.state.eventMeetingPlace);
      console.log("eventDate : "+this.refs.formEvent.state.eventDate.toString());
      console.log("eventTime : "+this.refs.formEvent.state.eventTime.toString());
      console.log("eventDateEnd : "+this.refs.formEvent.state.eventDateEnd.toString());
      console.log("eventMemberMax : "+this.refs.formEvent.state.eventMemberMax);
      console.log("eventDescription : "+this.refs.formEvent.state.eventDescription);

      return true;
    }
  },

  getStepContent: function(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (<div>{this.props.text.firstStepContent}</div>);
      case 1:
        return (
          <div className="form">
            <FRIP_FormEventCreation
              text={this.props.text}
              label={this.props.text.buttonEventCreationLabel}
              ref="formEvent"
            />
          </div>
      );
      default:
        return (<div>Error</div>);
    }
  },

  render: function() {
    const {finished, stepIndex} = this.state;

    return (
      <div id={this.props.id}>
        <div id="eventCreationPage">
          <div>
            <Stepper activeStep={stepIndex} orientation="horizontal">
              <Step>
                <StepLabel>{this.props.text.firstStep}</StepLabel>
              </Step>
              <Step>
                <StepLabel>{this.props.text.secondStep}</StepLabel>
              </Step>
            </Stepper>
          </div>
          <div className="form-stepper-content">
            {finished ? (
              <div>
                {this.props.text.eventCreationValidation}
              </div>
            ) : (
              <div>
                {this.getStepContent(stepIndex)}
                <div style={{marginTop: 12}}>
                  <FlatButton
                    label={this.props.text.back}
                    disabled={stepIndex === 0}
                    onTouchTap={this.handlePrev}
                    style={{marginRight: 12}}
                  />
                  <RaisedButton
                    label={stepIndex === 1 ? this.props.text.finish : this.props.text.next}
                    primary={true}
                    onTouchTap={this.handleNext}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

});

export default FRIP_EventCreationPage;
