import { Link } from "react-router";

function Home() {
  return (
    <section className="container mx-auto flex flex-col justify-center items-center min-h-screen">
      <div className="bg-white px-16 py-10 rounded-md shadow-md flex flex-col items-center">
        <span className="text-2xl mb-4">Gestion des naissances</span>
        <Link
          to={"/private/declarations"}
          className="bg-white border border-blue-700 px-6 py-3 rounded-md text-blue-700 hover:bg-blue-700 hover:text-white"
        >
          Déclaration
        </Link>
      </div>
    </section>
  );
}

export default Home;
