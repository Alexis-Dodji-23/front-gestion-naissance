import type { Demande } from "@/types/Demande";
import { useEffect, useState } from "react";

function useDemandes () {
    const[demandes, setDemandes] = useState<Demande[]>([]);
    
    const search = async () => {
        const response = await fetch("http://localhost:8080/demandes")
        const data = await response.json()
        setDemandes(data);
    }

    useEffect(()=> {
        search();
    },[]);

    return {demandes};
}

export {useDemandes};