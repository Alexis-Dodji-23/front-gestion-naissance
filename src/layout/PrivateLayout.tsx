import { Outlet } from "react-router"
import NavBar from "../components/navigation/NavBar"

function PrivateLayout() {
  return (
    <section className="bg-gray-200 min-h-screen">
      <NavBar />

      <header className="ml-60 mr-4 h-12 font-bold text-2xl flex justify-between items-center mb-3">
        <span>Déclarations</span>
        <span>Alexis</span>
      </header>

      <Outlet />
    </section>
  )
}

export default PrivateLayout