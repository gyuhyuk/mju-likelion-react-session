import Button from "./Button";

const Header = (props) => {
  const header = props.data;
  return (
    <>
      <div className="status-bar">
        <div>{header}</div>
        <div>
          <Button text="Home" />
          <Button text="More" />
        </div>
      </div>
    </>
  );
};

export default Header;
