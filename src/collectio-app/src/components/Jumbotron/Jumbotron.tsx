import "./Jumbotron.css";

export interface JumbotronProps {
  title: string;
  description: string;
}

const Jumbotron = (props: JumbotronProps) => {
  return (
    <div className="jumbotron gradient">
      <h2 className="jumbotron-title">{props.title}</h2>
      <p className="jumbotron-text">{props.description}</p>
      <img src="/image_transparent.png" alt="Test"/>
    </div>
  );
};

export default Jumbotron;
