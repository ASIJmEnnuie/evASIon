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
import FRIP_Popup from '../../components/FRIP_Popup';

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
        var obj = document.getElementById("errorNotSelected");
        if (this.refs.searchActivity.state.selected) {
          obj.style.display='none';
          this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
            eventActivityName: this.refs.searchActivity.state.value,
          });
        } else {
          obj.style.display='block';
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

    const values = {
      "eventActivityName": this.state.eventActivityName,
      "eventName": this.refs.formEvent.state.eventName,
      "eventPlace": this.refs.formEvent.state.eventPlace,
      // "eventMeetingPlace": this.refs.formEvent.state.eventMeetingPlace,
      "eventDate": this.refs.formEvent.state.eventDate,
      "eventTime": this.refs.formEvent.state.eventTime,
      // "eventDateEnd": this.refs.formEvent.state.eventDateEnd,
      // "eventTimeEnd": this.refs.formEvent.state.eventTimeEnd,
      "eventMemberMax": this.refs.formEvent.state.eventMemberMax,
      "eventDescription": this.refs.formEvent.state.eventDescription,
      "eventCreator": this.props.userId,
    };
    // TODO A ENLEVER
    console.log(values);
    if (this.props.stompClient != null)
      var formValid = this.props.stompClient.send("?", {}, JSON.stringify(values));

    this.refs.popupCreationEvent.handleOpen();
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
        this.setState({eventActivityName: "Other"});
      }
    }
  },

  getStepContent: function(stepIndex) {
    switch (stepIndex) {
      case 0:
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
              <div id="linkCreateActivity" className="link" onTouchTap={this.props.accessToActivityCreationPage}>{this.props.data.createActivitySuggestion}</div>
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
            <div id="errorNotSelected" className="error" >{this.props.data.errorNotSelected}</div>
          </div>);
      case 2:
        return (
          <div className="step">
          <div className="form">
            <FRIP_FormEventCreation
              data={this.props.data}
              ref="formEvent"
              stompClient={this.props.stompClient}
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
            {this.getStepContent(stepIndex)}
            <div>
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
        </div>
        <FRIP_Popup
          title={this.props.data.popupCreationEventTitle}
          text={this.props.data.popupCreationEventContent}
          buttonLabel={this.props.data.popupCreationEventButtonLabel}
          ref="popupCreationEvent"
          accessToHomePage={this.props.accessToHomePage}
        />
        </div>
      </div>
    );
  }

});

export default FRIP_EventCreationPage;
