import "./Header.css";
import { Link } from "react-router";

export interface HeaderProps {
  title: string;
  description: string;
}

const Header = (props: HeaderProps) => {
  return (
    <header className="header shadow-lg">
      <Link to={"/"}>
        <h1 className="header-title">{props.title}</h1>
      </Link>
      <p className="header-description">{props.description}</p>
    </header>
  );
};

export default Header;
