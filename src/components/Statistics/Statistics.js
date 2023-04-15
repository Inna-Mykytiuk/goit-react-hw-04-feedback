import propTypes from 'prop-types';

//створюємо компонент Statistics, який буде відображати статистику, передаємо в нього пропси з App через props і виводимо їх в розмітці компонента Statistics
export function Statistics({
  good,
  bad,
  neutral,
  title,
  totalFeedback,
  feedbackPercentage,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive feedback: {feedbackPercentage} %</li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  title: propTypes.string,
  totalFeedback: propTypes.number.isRequired,
  feedbackPercentage: propTypes.number.isRequired,
};

// import PropTypes from 'prop-types';

// // Create the Statistics component, which will display the feedback statistics passed from App via props, and render them in the Statistics component markup
// export function Statistics({
//   good,
//   bad,
//   neutral,
//   title,
//   totalFeedback,
//   feedbackPercentage,
// }) {
//   return (
//     <div>
//       <h2>{title}</h2>
//       <ul>
//         <li>Good: {good}</li>
//         <li>Neutral: {neutral}</li>
//         <li>Bad: {bad}</li>
//         <li>Total: {totalFeedback}</li>
//         <li>Positive feedback: {feedbackPercentage}%</li>
//       </ul>
//     </div>
//   );
// }

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   title: PropTypes.string,
//   totalFeedback: PropTypes.number.isRequired,
//   feedbackPercentage: PropTypes.number.isRequired,
// };
