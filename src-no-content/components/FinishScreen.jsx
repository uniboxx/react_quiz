function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const perc = (points / maxPoints) * 100;
  const emoji =
    perc === 100
      ? '🥇'
      : perc >= 80
      ? '🎉'
      : perc >= 50
      ? '🙃'
      : perc > 0
      ? '🤨'
      : perc === 0
      ? '🤦‍♂️'
      : '';

  return (
    <>
      <p className='result'>
        <span>{emoji}</span> You scored{' '}
        <strong>
          {points} out of {maxPoints} ({Math.ceil(perc)}%)
        </strong>
      </p>
      <p className='highscore'>Highscore: {highscore} points</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'restart' })}>
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
