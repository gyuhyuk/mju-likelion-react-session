const Detail = (props) => {
  const { details } = props.data;
  return (
    <>
      <div className="second-container">
        <h1 className="header-h1">Activity Details</h1>
        <p className="korean">{details}</p>
      </div>
    </>
  );
};

export default Detail;
