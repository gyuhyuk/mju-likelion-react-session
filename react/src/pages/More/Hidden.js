const Hidden = (props) => {
  const { answer } = props.data;
  return (
    <>
      {" "}
      <button className="mbti-btn">{answer}</button>
    </>
  );
};

export default Hidden;
