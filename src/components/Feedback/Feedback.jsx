const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => {
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Tital: {totalFeedback}</p>
      <p>Positive:{positiveFeedbackPercentage}</p>
    </div>
  );
};

export default Feedback;
