const Capability = (props) => {
  const { capability } = props.data;
  return (
    <>
      <div className="third-container">
        <h1 className="header-h1">basic Capability</h1>
        <p>{capability}</p>
      </div>
    </>
  );
};

export default Capability;
