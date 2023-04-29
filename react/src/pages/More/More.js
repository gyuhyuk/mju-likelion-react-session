import Data from "../Data.json";
import Info from "../components/Info";
import Motive from "./Motive";
import HobbyList from "./Hobby/HobbyList";
import Mbti from "./Mbti";
import Hidden from "./Hidden";
import Header from "../components/Header";
import "../../Main.css";

const More = () => {
  return (
    <>
      <Header data={Data} />
      <div className="profile">
        <Info data={Data} />
        <div className="container">
          <Motive data={Data} />
          <HobbyList data={Data} />
          <Mbti data={Data} />
          <Hidden data={Data} />
        </div>
      </div>
    </>
  );
};

export default More;
