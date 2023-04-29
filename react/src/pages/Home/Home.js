import About from "./About";
import Capability from "./Capability";
import Detail from "./Detail";
import Data from "../Data.json";
import Info from "../components/Info";
import Mylink from "./Mylink";
import Header from "../components/Header";
import "../../Main.css";

const Home = () => {
  return (
    <>
      <Header data={Data} />
      <div className="profile">
        <Info data={Data} />
        <div className="container">
          <About data={Data} />
          <Detail data={Data} />
          <Capability data={Data} />
          <Mylink data={Data} />
        </div>
      </div>
    </>
  );
};

export default Home;