import "./Header.css";

export interface HeaderProps {
  title: string;
  description: string;
}

const Header = (props: HeaderProps) => {
  return (
    <header className="header gradient">
      <h1 className="header-title">{props.title}</h1>
      <p className="header-description">{props.description}</p>
    </header>
  );
};

export default Header;
