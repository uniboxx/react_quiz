function NextButton({ dispatch, answer, index, numQuestions }) {
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
