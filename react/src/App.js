import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import More from "./pages/More/More";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </>
  );
}

export default App;
