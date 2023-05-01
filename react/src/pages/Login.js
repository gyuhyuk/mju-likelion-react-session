import { useState } from "react";

const Login = ({ check }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const idChange = (event) => {
    setId(event.target.value);
    console.log(event);
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
    <div className="wrapper_box">
      <h2>LOG IN</h2>
      <form onSubmit={handleLogin} className="login_form">
        <input
          type="text"
          className="login_input"
          placeholder="ID"
          onChange={idChange}
        />
        <input
          placeholder="Password"
          type="Password"
          className="login_input"
          onChange={passChange}
        />
        <button type="submit" className="login_btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
