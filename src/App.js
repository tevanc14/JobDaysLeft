import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import messagePicker from "./logic/messagePicker";
import daysLeft from "./logic/dayCounter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focused: false,
      daysLeft: -1,
      message: "",
      askingQuestion: true
    };
  }

  render() {
    return (
      <div className="App">
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}
        >
          {this.state.askingQuestion && (
            <div className="date-picker">
              <p>When is the first day of your new job?</p>
              <SingleDatePicker
                numberOfMonths={1}
                date={this.state.date}
                onDateChange={date => this.handleDateChange(date)}
                focused={this.state.focused}
                onFocusChange={({ focused }) =>
                  this.setState({ focused: focused })
                }
                hideKeyboardShortcutsPanel={true}
              />
            </div>
          )}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}
        >
          {!this.state.askingQuestion && (
            <p className="time-left">{this.state.message}</p>
          )}
        </ReactCSSTransitionGroup>
      </div>
    );
  }

  handleDateChange(date) {
    // Timeout as opposed to a third party state management system.
    // Plus, I'm not sure how to do it properly.
    setTimeout(() => {
      this.setState({ date: date });
      this.setState({ daysLeft: daysLeft(this.state.date) });
      this.setState({ message: messagePicker(this.state.daysLeft) });
    }, 100);
    this.setState({ askingQuestion: false });
  }
}

export default App;
