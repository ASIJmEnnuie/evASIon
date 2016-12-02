import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {FRIP_FormEventCreation} from '../../components/FRIP_Form';
import {FRIP_SearchActivityLittleController} from '../../components/FRIP_SearchController';

const FRIP_EventCreationPage = React.createClass({
  getInitialState: function() {
    return {
      finished: false,
      stepIndex: 0,
      eventActivityName: "",
      value: 1,
      activityPresent: "",
    }
  },

  handleNext: function() {
    const {stepIndex} = this.state;

    switch (this.state.stepIndex) {
      case 0:
        if (this.state.value==1) {
          this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
          });
        } else {
          if (this.state.value==2) {
            this.setState({
              stepIndex: stepIndex + 2,
              finished: stepIndex >= 2,
            });
          }
        }
        break;
      case 1:
        if (this.refs.searchActivity.state.value.trim()) {
          this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
            eventActivityName: this.refs.searchActivity.state.value,
          });
        }
        break;
      case 2:
        if (this.refs.formEvent.handleSubmit()) {
          this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
          });
          this.handleSubmit();
        }
        break;
      default: console.log("error");

    }
  },

  handlePrev: function() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      if (this.state.value==2 && stepIndex==2) {
        this.setState({stepIndex: stepIndex - 2});
      } else {
        this.setState({stepIndex: stepIndex - 1});
      }
    }
  },

  handleSubmit: function() {

    // TODO ENVOI BD pour la création de l'évt

    // A ENLEVER
    console.log("eventActivityName: "+this.state.eventActivityName);
    console.log("eventName : "+this.refs.formEvent.state.eventName);
    console.log("eventPlace : "+this.refs.formEvent.state.eventPlace);
    console.log("eventMeetingPlace : "+this.refs.formEvent.state.eventMeetingPlace);
    console.log("eventDate : "+this.refs.formEvent.state.eventDate.toString());
    console.log("eventTime : "+this.refs.formEvent.state.eventTime.toString());
    // console.log("eventDateEnd : "+this.refs.formEvent.state.eventDateEnd.toString());
    // console.log("eventTimeEnd : "+this.refs.formEvent.state.eventTimeEnd.toString());
    console.log("eventMemberMax : "+this.refs.formEvent.state.eventMemberMax);
    console.log("eventDescription : "+this.refs.formEvent.state.eventDescription);

  },

  setActivityPresent: function(event, index, value) {
    var obj = document.getElementById("linkCreateActivity");
    this.setState({value});
    if (value == 1) {
      obj.style.display='none';
    }
    else {
      if (value == 2) {
        obj.style.display='block';
        this.setState({eventActivityName: "Autre"});
      }
    }
  },

  getStepContent: function(stepIndex) {
    switch (stepIndex) {
      case 0:
        //TODO mettre le lien ! onTouchTap={}
        return (
          <div className="step">
            <div className="form-select-field">
              <div>{this.props.data.firstStepContent}</div>
              <SelectField
                id="activityLink"
                className="form-select-content"
                value={this.state.value}
                onChange={this.setActivityPresent}
                hintText={this.props.data.answer}
              >
                <MenuItem value={1} primaryText={this.props.data.yes} className="form-select-content"/>
                <MenuItem value={2} primaryText={this.props.data.no} className="form-select-content"/>
              </SelectField>
              <div id="linkCreateActivity" className="link">{this.props.data.createActivitySuggestion}</div>
            </div>
          </div>
          );
      case 1:
        return (
          <div className="step">
            <FRIP_SearchActivityLittleController
              data={this.props.data}
              ref="searchActivity"
            />
          </div>);
      case 2:
        return (
          <div className="step">
          <div className="form">
            <FRIP_FormEventCreation
              data={this.props.data}
              ref="formEvent"
            />
          </div>
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
        <div id="eventCreationContent">
          <div>
            <Stepper activeStep={stepIndex} orientation="horizontal">
              <Step>
                <StepLabel>{this.props.data.firstStep}</StepLabel>
              </Step>
              <Step>
                <StepLabel>{this.props.data.secondStep}</StepLabel>
              </Step>
              <Step>
                <StepLabel>{this.props.data.thirdStep}</StepLabel>
              </Step>
            </Stepper>
          </div>
          <div className="form-stepper-content">
            {finished ? (
              <div>
                {this.props.data.eventCreationValidation}
              </div>
            ) : (
              <div>
                {this.getStepContent(stepIndex)}
                <div style={{marginTop: 30}}>
                  <FlatButton
                    label={this.props.data.back}
                    disabled={stepIndex === 0}
                    onTouchTap={this.handlePrev}
                    style={{marginRight: 12}}
                  />
                  <RaisedButton
                    label={stepIndex === 2 ? this.props.data.finish : this.props.data.next}
                    primary={true}
                    onTouchTap={this.handleNext}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    );
  }

});

export default FRIP_EventCreationPage;
