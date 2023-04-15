const Hobby = (props) => {
  return (
    <>
      <div className={props.isdark ? "hobbyContentDarkMode" : "hobbyContent"}>
        {props.data}
      </div>
    </>
  );
};

export default Hobby;
