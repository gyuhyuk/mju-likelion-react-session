const About = (props) => {
  const { aboutMe } = props.data;
  return (
    <>
      <div className="first-container ">
        <h1 className="header-h1">About Me</h1>
        <p className="korean">{aboutMe}</p>
      </div>
    </>
  );
};

export default About;
