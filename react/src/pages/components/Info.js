import img from "../../img/profile.jpeg";
import { useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Info = (props) => {
  const { isDark } = useContext(ThemeContext);
  const { name, birthday, phone, email } = props.data;
  const [count, setCount] = useState(localStorage.getItem("count"));
  const total = Number(count);
  localStorage.setItem("count", total);
  const Good = () => {
    setCount(total + 1);
  };
  const Bad = () => {
    setCount(total - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const emoticon =
    count < 0 ? <h1>Total Like {count} 😫</h1> : <h1>Total Like {count} 🥰</h1>;

  return (
    <>
      <div className="profile-img-box">
        <img className="profile-img" src={img} alt="사진" />
        <h2 className={isDark ? "profile-name-darkMode" : ""}>{name}</h2>
        <div
          className={isDark ? "profile-img-text-darkMode" : "profile-img-text"}
        >
          <p className="profile-img-text-p">{birthday}</p>
          <p className="profile-img-text-p">{phone}</p>
          <p className="profile-img-text-p">{email}</p>
          <div>{emoticon}</div>
          <button
            onClick={Good}
            className={isDark ? "profile-btn-darkMode" : "profile-btn"}
          >
            like😍
          </button>
          <button
            onClick={Bad}
            className={isDark ? "profile-btn-darkMode" : "profile-btn"}
          >
            dislike😂
          </button>
          <button
            onClick={reset}
            className={isDark ? "profile-btn-darkMode" : "profile-btn"}
          >
            reset!
          </button>
        </div>
      </div>
    </>
  );
};

export default Info;
