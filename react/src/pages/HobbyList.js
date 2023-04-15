import Hobby from "./Hobby";

const HobbyList = (props) => {
  const { hobby } = props.data;
  return (
    <>
      <h3>HOBBY</h3>
      <div className="wrapHobby">
        {hobby.map((data, index) => (
          <Hobby data={data} key={index} isdark={props.dark} />
        ))}
      </div>
    </>
  );
};

export default HobbyList;
