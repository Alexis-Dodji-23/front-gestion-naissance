import { search } from "@/services";
import type { Demande } from "@/types/Demande";
import { useEffect, useState } from "react";

function useDemandes () {
    const[demandes, setDemandes] = useState<Demande[]>([]);
    
    const getDemandes = async () => {
        const data = await search("demandes")
        setDemandes(data);
    }

    useEffect(()=> {
        getDemandes();
    },[]);

    return {demandes};
}

export {useDemandes};