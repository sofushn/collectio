import "./Jumbotron.css";
import logo from "@/assets/image_transparent.png";

export interface JumbotronProps {
  title: string;
  description: string;
}

const Jumbotron = (props: JumbotronProps) => {
  return (
    <div className="jumbotron gradient grid grid-cols-2 gap-4">
      <div className="jumbotron-text-div">
        <h2 className="jumbotron-title">{props.title}</h2>
        <p className="jumbotron-text">{props.description}</p>
      </div>
      <img className="jumbotron-img" src={logo} alt="Test" />
    </div>
  );
};

export default Jumbotron;
