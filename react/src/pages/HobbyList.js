import Hobby from "./Hobby";

const HobbyList = (props) => {
  const { hobby } = props.data;
  return (
    <>
      <div className="second-container">
        <h1 className="header-h1">Hobby</h1>
        {hobby.map((data, index) => (
          <Hobby data={data} key={index} />
        ))}
      </div>
    </>
  );
};

export default HobbyList;
