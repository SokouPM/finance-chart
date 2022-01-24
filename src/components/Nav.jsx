import Link from "next/link"
import { MdAddCircle, MdOutlineEventNote } from "react-icons/md"

const Nav = () => {
  return (
    <nav className="text-lg flex flex-row items-center justify-between">
      <Link href="/">
        <a className="py-2 text-center flex items-center justify-evenly w-32 transition-all hover:bg-slate-500 hover:font-bold">
          <MdOutlineEventNote /> Journal
        </a>
      </Link>
      <Link href="/ajouter">
        <a className="py-2 text-center flex items-center justify-evenly w-32 transition-all hover:bg-slate-500 hover:font-bold">
          <MdAddCircle /> Ajouter
        </a>
      </Link>
    </nav>
  )
}

export default Nav
