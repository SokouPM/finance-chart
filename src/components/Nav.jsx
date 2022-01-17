import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <a>Compte</a>
      </Link>
      <Link href="/ajout">
        <a>Ajouter</a>
      </Link>
    </nav>
  );
};

export default Nav;
