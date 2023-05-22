import React from 'react';
import PropTypes from 'prop-types';
// import FeedbackOptions from './FeedbackOptions';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>

        <li>Total: {total()}</li>
        <li>Positive feedback: {positivePercentage()}%</li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};

export default Statistics;
