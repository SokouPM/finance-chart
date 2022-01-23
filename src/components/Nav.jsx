import Link from "next/link"

const Nav = () => {
  return (
    <nav className="text-lg flex flex-row items-center justify-between">
      <Link href="/">
        <a className="py-2 text-center w-24 transition-all hover:bg-slate-500 hover:font-bold">
          Journal
        </a>
      </Link>
      <Link href="/ajouter">
        <a className="py-2 text-center w-24 transition-all hover:bg-slate-500 hover:font-bold">
          Ajouter
        </a>
      </Link>
    </nav>
  )
}

export default Nav
