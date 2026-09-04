import { DEMANDES, formatDate, getColorStatut, getLabelStatut } from "../utils"

function Demandes() {
  return (
    <section className="ml-60 mr-4">
        <article className="grid grid-cols-8 mb-1">
            <span className="">Date</span>
            <span className="text-center">Enfant</span>
            <span className="text-center">Date Naissance</span>
            <span className="text-center">Hopital</span>
            <span className="text-center">Parent 1</span>
            <span className="text-center">Parent 2</span>
            <span className="text-center">Statut</span>
            <span className="text-center">Action</span>
        </article>

        {DEMANDES.map((demandes, index) => (
        <article 
            key={demandes.id} 
            className={`grid grid-cols-8 ${index % 2 == 0 ? "bg-gray-100" : null}`}
        >
            <span className="border-gray-200 border-t-2 py-1 flex flex-col">{formatDate(demandes.registered)}</span>

            <span className="border-gray-200 border-t-2 py-1 flex justify-center items-center">
                <span>{demandes.child.firstName}</span>
                <span>{demandes.child.lastName}</span>
            </span>

            <span className="border-gray-200 border-t-2 py-1 flex justify-center items-center">{formatDate(demandes.child.birthDate)}</span>

            <span className="border-gray-200 border-t-2 py-1 flex justify-center items-center">{demandes.company.name}</span>

            <span className="border-gray-200 border-t-2 py-1 flex justify-center items-center">
                <span>{demandes.firstParent.firstName}</span>
                <span>{demandes.firstParent.lastName}</span>
            </span>

            <span className="border-gray-200 border-t-2 py-1 flex justify-center items-center">
                <span>{demandes.secondParent.firstName}</span>
                <span>{demandes.secondParent.lastName}</span>
            </span>

            <span 
                className={`border-gray-200 border-t-2 py-2 flex justify-center items-center ${getColorStatut(demandes.status)}`}
            >
                {getLabelStatut(demandes.status)}
            </span>

          <span className="border-gray-200 border-t-2 py-2 flex justify-center items-center">Action</span>
        </article>
        ))}
    </section>
  )
}

export default Demandes