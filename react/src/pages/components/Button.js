import { useNavigate } from "react-router-dom";

const Button = ({ text }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const path = text === "Home" ? "/" : `/${text}`;
    navigate(`${path}`);
  };
  return (
    <>
      <button className="btn button-text button" onClick={handleClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
