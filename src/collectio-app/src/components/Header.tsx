import "./Header.css";

export interface HeaderProps {
  title: string, 
  subtitle: string, 
  description: string 
}

const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <h1 className="header-title">{props.title}</h1>
      <h2 className="header-subtitle">{props.subtitle}</h2>
      <p className="header-description">{props.description}</p>
    </header>
  );
};

export default Header;
