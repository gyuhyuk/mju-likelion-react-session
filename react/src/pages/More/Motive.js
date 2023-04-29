const Motive = (props) => {
  const { motive } = props.data;
  return (
    <>
      <div className="first-container ">
        <h1 className="header-h1">Motive</h1>
        <p className="korean">{motive}</p>
      </div>
    </>
  );
};

export default Motive;
