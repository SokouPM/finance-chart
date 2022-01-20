import Nav from "/src/components/Nav";

const Header = ({ title }) => {
  return (
    <header className="h-16 px-10 mb-8 flex flex-row items-center justify-between bg-blue-500 text-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      <Nav />
    </header>
  );
};

export default Header;
