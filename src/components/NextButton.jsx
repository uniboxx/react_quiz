import { useQuiz } from '../contexts/QuizContext';

function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuiz();
  if (answer === null) return null;
  const isNextQuestion = index < numQuestions - 1;

  return (
    <button
      className='btn btn-ui'
      onClick={() =>
        dispatch({
          type: isNextQuestion ? 'nextQuestion' : 'finish',
        })
      }>
      {isNextQuestion ? 'Next' : 'Finish'}
    </button>
  );
}

export default NextButton;
