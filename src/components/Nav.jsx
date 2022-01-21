import Link from "next/link"

const Nav = () => {
  return (
    <nav className="text-lg flex flex-row items-center justify-between">
      <Link href="/">
        <a className="hover:bg-blue-400 hover:font-bold py-2 text-center w-24">
          Journal
        </a>
      </Link>
      <Link href="/ajouter">
        <a className="hover:bg-blue-400 hover:font-bold py-2 text-center w-24">
          Ajouter
        </a>
      </Link>
    </nav>
  )
}

export default Nav
