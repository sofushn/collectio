import "./Jumbotron.css";
import logo from "@/assets/image_transparent.png"

export interface JumbotronProps {
  title: string;
  description: string;
}

const Jumbotron = (props: JumbotronProps) => {
  return (
    <div className="jumbotron gradient">
      <h2 className="jumbotron-title">{props.title}</h2>
      <p className="jumbotron-text">{props.description}</p>
      <img src={logo} alt="Test"/>
    </div>
  );
};

export default Jumbotron;
