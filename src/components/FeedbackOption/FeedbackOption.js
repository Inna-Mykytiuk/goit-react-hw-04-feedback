import propTypes from 'prop-types';
import { Button } from './FeedbackOption.styled';

//створюємо компонент FeedbackOption, який буде відображати кнопки, передаємо в нього пропси з App через props і виводимо їх в розмітці компонента FeedbackOption
export function FeedbackOption({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <Button
          key={option}
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

FeedbackOption.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  onLeaveFeedback: propTypes.func,
};
