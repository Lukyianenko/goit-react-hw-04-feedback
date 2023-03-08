import React, { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Feedback/Section';
import { Statistics } from './Feedback/Statistics';
import { Notification } from './Feedback/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  }
  onIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  }
  onIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  }
  countTotalFeedback = () => {
    return (
      this.state.good + this.state.neutral + this.state.bad
    )
  }
  countPositiveFeedbackPercentage = () => {
    return (
      Math.round((this.state.good / this.countTotalFeedback()) * 100)
    )
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
      <Section
      title="Please leave feedback"
      >
        <FeedbackOptions 
        incrementNeutral={this.onIncrementNeutral}
        incrementBad={this.onIncrementBad}
        incrementGood={this.onIncrementGood}
        />
        {this.countTotalFeedback() !== 0  ? 
        <Statistics 
        good={this.state.good} 
        neutral={this.state.neutral} 
        bad={this.state.bad} 
        total={this.countTotalFeedback} 
        positivePercentage={this.countPositiveFeedbackPercentage}
        /> :
        <Notification message="There is no feedback" />}       
      </Section>
      </div>
    );
  }
}

export default App;
