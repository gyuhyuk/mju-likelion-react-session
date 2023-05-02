import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import More from "./pages/More/More";
import Header from "./pages/components/Header";

function App() {
  return (
    <>
      <Header data="MJU LikeLion" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </>
  );
}

export default App;
