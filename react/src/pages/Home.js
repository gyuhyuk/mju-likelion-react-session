import Data from "./Data.json";
import Header from "./Header";
import Info from "./Info";
import About from "./About";
import Detail from "./Detail";
import Capability from "./Capability";
import Mylink from "./Mylink";
import "../Main.css";

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
