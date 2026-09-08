import type { Declarations } from "@/types/Declarations";
import { formatDate, getColorStatut, getLabelStatut } from "@/utils";
import { useEffect, useState } from "react";

function Declarations() {
    
    const[declarations, setDeclarations] = useState<Declarations[]>([]);

    const search = async () => {
        const response = await fetch("http://localhost:8080/declarations")
        const data = await response.json()
        setDeclarations(data);
    }

    useEffect(()=> {
        search();
    },[]);

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

      {declarations.map((declaration: Declarations, index) => (
        <article 
            key={declaration.id} 
            className={`grid grid-cols-8 ${index % 2 == 0 ? "bg-gray-100" : null}`}
        >
            <span className="border-gray-200 border-t-2 py-1 flex flex-col">{formatDate(declaration.registered)}</span>

            <span className="border-gray-200 border-t-2 py-1 flex justify-center items-center">
                <span>{declaration.child.firstName}</span>
                <span>{declaration.child.lastsName}</span>
            </span>

            <span className="border-gray-200 border-t-2 py-1 flex justify-center items-center">{declaration?.child?.birthDate ? formatDate(declaration.child.birthDate) : null}</span>

            <span className="border-gray-200 border-t-2 py-1 flex justify-center items-center">{declaration.company.name}</span>

            <span className="border-gray-200 border-t-2 py-1 flex justify-center items-center">
                <span>{declaration.firsParent.firstName}</span>
                <span>{declaration.firsParent.lastsName}</span>
            </span>

            <span className="border-gray-200 border-t-2 py-1 flex justify-center items-center">
                <span>{declaration.secondParent.firstName}</span>
                <span>{declaration.secondParent.lastsName}</span>
            </span>

            <span 
                className={`border-gray-200 border-t-2 py-2 flex justify-center items-center ${getColorStatut(declaration.status)}`}
            >
                {getLabelStatut(declaration.status)}
            </span>

          <span className="border-gray-200 border-t-2 py-2 flex justify-center items-center">Action</span>
        </article>
      ))}
    </section>
  );
}

export default Declarations;


