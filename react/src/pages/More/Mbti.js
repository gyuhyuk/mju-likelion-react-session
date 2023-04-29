const Mbti = (props) => {
  const { mbti } = props.data;
  return (
    <>
      <div className="third-container">
        <h1 className="header-h1">My MBTI! Guess What?</h1>
        <p>{mbti}</p>
      </div>
    </>
  );
};

export default Mbti;
