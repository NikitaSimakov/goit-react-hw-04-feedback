import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const Buttons = ({ onLeaveFeedback, options }) => {
  const [typeGood, typeNeutral, typeBad] = options;

  return (
    <div className={css.feedback_thumb_button}>
      <button
        className={css.feedback_button}
        onClick={() => onLeaveFeedback(typeGood)}
        type="button"
      >
        Good
      </button>
      <button
        className={css.feedback_button}
        onClick={() => onLeaveFeedback(typeNeutral)}
        type="button"
      >
        Neutral
      </button>
      <button
        className={css.feedback_button}
        onClick={() => onLeaveFeedback(typeBad)}
        type="button"
      >
        Bad
      </button>
    </div>
  );
};

Buttons.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};
export default Buttons;
