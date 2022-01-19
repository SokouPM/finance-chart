import Nav from "./Nav";

const Header = (props) => {
  return (
    <header className="h-16 px-96 flex flex-row items-center justify-between bg-blue-500 text-white">
      <h1 className="text-3xl font-bold">{props.title}</h1>
      <Nav />
    </header>
  );
};

export default Header;
