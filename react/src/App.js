import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/components/Header";
import More from "./pages/More/More";
import { UserInfo } from "./pages/UserInfo";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import { ThemeContext } from "./pages/ThemeContext";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  console.log(isLogin);
  useEffect(() => {
    localStorage.setItem("id", UserInfo.id);
    localStorage.setItem("password", UserInfo.password);
  }, []);

  return (
    <>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Header data="MJU LikeLion" />

        <Routes>
          <Route
            path="/"
            element={isLogin ? <Home /> : <Login check={setIsLogin} />}
          />
          <Route path="/Home" element={<Home />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
