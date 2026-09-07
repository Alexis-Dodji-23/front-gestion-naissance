import { Link } from "react-router";
import { NAV_LINKS } from "@/utils";

function NavBar() {
  return (
    <nav className="bg-white w-56 min-h-screen fixed z-10 flex flex-col justify-between">
      <Link
        to={"/private/declarations"}
        className="bg-blue-700 py-3 text-white font-bold text-center"
      >
        LES NOUVELLES VIES
      </Link>

      <ul>
        {NAV_LINKS.map(({to, label}, index) => (
            <li key={index} className="border py-2 hover:bg-gray-200">
              <Link to={to}>{label}</Link>
            </li>
        ))}
      </ul>

      <button
        type="button"
        className="bg-red-700 py-3 text-white hover:bg-white hover:border hover:border-red-700 hover:text-red-700"
      >
        Déconnexion
      </button>
    </nav>
  );
}

export default NavBar;
