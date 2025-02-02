import { useQuiz } from '../contexts/QuizContext';

function Progress() {
  const { state, numQuestions, maxPoints } = useQuiz();
  return (
    <header className='progress'>
      <progress
        type='progress'
        max={numQuestions}
        value={state.index + +(state.answer !== null)}
      />
      <p>
        Question{' '}
        <strong>
          {state.index + 1} / {numQuestions}
        </strong>
      </p>
      <p>
        Points{' '}
        <strong>
          {state.points} / {maxPoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
