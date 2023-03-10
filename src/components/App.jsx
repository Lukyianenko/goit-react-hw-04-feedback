import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Feedback/Section';
import { Statistics } from './Feedback/Statistics';
import { Notification } from './Feedback/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

 
  const countTotalFeedback = () => {
    return (
      good + neutral + bad
    )
  }
  const countPositiveFeedbackPercentage = () => {
    return (
      Math.round((good / countTotalFeedback()) * 100)
    )
  }

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
        incrementNeutral={() => setNeutral(neutral + 1)}
        incrementBad={() => setBad(bad + 1)}
        incrementGood={() => setGood(good + 1)}
        />
        {countTotalFeedback() !== 0  ? 
        <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={countTotalFeedback} 
        positivePercentage={countPositiveFeedbackPercentage}
        /> :
        <Notification message="There is no feedback" />}       
      </Section>
      </div>
    );
}

