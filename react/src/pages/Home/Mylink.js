import instagram from "../../img/instagram.jpeg";
import github from "../../img/github.jpeg";
import blog from "../../img/blog.jpeg";

const Mylink = (props) => {
  const { instagramLink, githubLink, naverLink } = props.data;
  return (
    <>
      <div className="fourth-container">
        <h1 className="header-h1">link</h1>
        <a href={instagramLink} target="blank">
          <img src={instagram} className="internet-img" alt="instagram"></img>
        </a>
        <a href={githubLink} target="blank">
          <img src={github} className="internet-img" alt="github"></img>
        </a>
        <a href={naverLink} target="blank">
          <img src={blog} className="internet-img" alt="blog"></img>
        </a>
      </div>
    </>
  );
};

export default Mylink;
