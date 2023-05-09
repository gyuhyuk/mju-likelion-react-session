import { useState } from "react";

const Login = ({ check }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const idChange = (event) => {
    setId(event.target.value);
  };

  const passChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (
      id === localStorage.getItem("id") &&
      password === localStorage.getItem("password")
    ) {
      check((prev) => !prev);
    } else {
      alert("틀렸삼");
    }
  };

  return (
    <div className="wrapper-box">
      <h2>LOG IN</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          className="login-input"
          placeholder="ID"
          onChange={idChange}
        />
        <input
          placeholder="Password"
          type="Password"
          className="login-input"
          onChange={passChange}
        />
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
