import Nav from "./Nav";

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <Nav />
    </header>
  );
};

export default Header;
