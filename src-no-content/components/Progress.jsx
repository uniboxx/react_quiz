function Progress({ numQuestions, maxPoints, state }) {
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
