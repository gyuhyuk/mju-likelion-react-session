import img from "../img/profile.jpeg";
import { useState } from "react";

const Info = (props) => {
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
        <h2>{name}</h2>
        <div className="profile-img-text">
          <p className="profile-img-text-p">{birthday}</p>
          <p className="profile-img-text-p">{phone}</p>
          <p className="profile-img-text-p">{email}</p>
          <p>{emoticon}</p>
          <button onClick={Good} className="profile-btn">
            like😍
          </button>
          <button onClick={Bad} className="profile-btn">
            dislike😂
          </button>
          <button onClick={reset} className="profile-btn">
            reset!
          </button>
        </div>
      </div>
    </>
  );
};

export default Info;
