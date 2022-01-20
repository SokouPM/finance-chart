import Nav from "./Nav";

const Header = ({ title }) => {
  return (
    <header className="h-16 mb-8 flex flex-row items-center justify-evenly bg-blue-500 text-white">
      <h1 className="text-3xl font-bold">{title}</h1>
      <Nav />
    </header>
  );
};

export default Header;
